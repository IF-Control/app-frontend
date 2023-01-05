import React, { useState } from 'react';
import AppButton from '../../components/AppButton';
import * as DocumentPicker from "expo-document-picker";
import { Linking, StyleSheet, TouchableHighlight, View } from "react-native";
import { Container, Card, CardBody, FormText, Link, Row, RadioBtn, RadioTxt, UploadBtn, UploadTxt, Separator, Spinner, ErrorMessage, SuccessMessage } from './styles';
import { AppPageTitle } from '../../components/AppPageTitle';
import { AntDesign } from '@expo/vector-icons'; 
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { setContamination } from '../../services/models/setContamination';
const Item: any = Picker.Item;

export function Covid(){
    const [checked, setChecked] = useState('Positivo');
    const [symptomatic, setSymptomatic] = useState<any>(true);
    const [document, setDocument] = useState<any>(null);

    const [contaminationReport, setContaminationReport] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState<any>(false);

    const uploadDocs = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setDocument(result);
    };

    const submitForm = (async () => {
        setHasError(false);
        setIsLoading(true);
        setContaminationReport(null);

        const data = new FormData();

        if(checked == 'Positivo'){
            if(!document || !document.uri || !document.mimeType || !document.name){
                setHasError("O resultado do teste de Covid-19 não foi selecionado.");
                setIsLoading(false);
                return;
            }

            if(document.mimeType != 'application/pdf'){
                setHasError("Só é possível enviar arquivos PDF.");
                setIsLoading(false);
                return;
            }

            if(document.size > 400000){
                setHasError("Arquivo muito pesado. O arquivo deve ter no máximo 400Kb.");
                setIsLoading(false);
                return;
            }

            data.append("file", {
                uri: document.uri,
                type: document.mimeType,
                name: document.name
            }); 
        }else{
            data.append("file", ' '); 
        }
        data.append("symptomatic", symptomatic); 
        data.append("case_type", checked); 
    
        try{
            const response = await setContamination.execute(data);
            setContaminationReport(response);
        }catch(e){
            setHasError(e.response.data.error);
        }finally{
            setIsLoading(false);
        }
    });

    function errorExists(){
        if(hasError){
            return <ErrorMessage>{hasError}</ErrorMessage>
        }
    }

    function succesfulySend(){
        if(contaminationReport){
            return <SuccessMessage>Teste da Covid-19 enviado com sucesso.</SuccessMessage>
        }
    }
    
    return (
        <Container>
            <Card>
                <AppPageTitle name="Informar Contaminação" />

                <CardBody>
                    <View>
                        <FormText>Você está sob suspeita de Covid-19 ou já é um caso confirmado?</FormText>
                        <FormText>Por favor, nos informe abaixo. Lembre-se: todos os casos de suspeita ou já positivados devem cumprir com o protocolo sanitário vigente no campus e cumprir o isolamento.</FormText>
                        <FormText>Para dúvidas envie um email para:
                            <TouchableHighlight onPress={() => Linking.openURL('mailto:cragru@ifsp.edu.br?subject=Dúvidas&body=AppIFControl')}>
                                <Link>cragru@ifsp.edu.br</Link>
                            </TouchableHighlight>
                        </FormText>
                    </View>

                    <Row>
                        <RadioBtn>
                            <RadioButton 
                                value="Positivo" 
                                status={ checked === 'Positivo' ? 'checked' : 'unchecked' } 
                                onPress={() => {
                                    setChecked('Positivo');
                                }}  
                                color="#2F9E41" 
                            />
                        </RadioBtn>

                        <RadioTxt>Covid-19 Positivo</RadioTxt>
                    </Row>

                    <Row>
                        <RadioBtn>
                            <RadioButton 
                                value="Suspeita" 
                                status={ checked === 'Suspeita' ? 'checked' : 'unchecked' } 
                                onPress={() => {
                                    setChecked('Suspeita');
                                }}  
                                color="#2F9E41" 
                            />  
                        </RadioBtn>

                        <RadioTxt>Suspeita de Covid-19</RadioTxt>
                    </Row>

                    <FormText>É sintomático?</FormText>
                    <Picker
                        testID="type-user-picker"
                        selectedValue={symptomatic}
                        onValueChange={(s) => setSymptomatic(s)}
                        accessibilityLabel="Defina se seu estado é sintomático ou não."
                        dropdownIconColor="#005600"
                        mode="dropdown"
                        style={{
                            backgroundColor: '#FFF'
                        }}
                    >
                        <Item
                            label="Sim"
                            value={true}
                            style={styles.inputSelect}
                        />
                        <Item
                            label="Não"
                            value={false}
                            style={styles.inputSelect}
                        />
                    </Picker>

                    <FormText>Envie os resultados de seus testes de Covid-19 se for um caso positivo.</FormText>
                </CardBody>
                <UploadBtn onPress={uploadDocs}>
                    <UploadTxt><AntDesign name="upload" size={20} color="#fff" /> Escolher Arquivos</UploadTxt>
                </UploadBtn>
                
                <Separator />

                {errorExists()}
                {succesfulySend()}

                { isLoading ? (
                    <Spinner size={25} color="#2F9E41" />
                ) : (
                    <AppButton 
                        text="Enviar" 
                        backgroundColor="#2F9E41" 
                        accessibilityLabel="Botão para enviar as informações sobre contaminação" 
                        onPress={submitForm} 
                    />
                )}

            </Card>
        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 7,
        borderWidth: 1,
        borderColor: '#A7A7A7',
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        fontSize: 14,
        borderRadius: 20
    },
    inputSelect: {
        color: '#414141',
        backgroundColor: '#fff',
        padding: 8,
        fontSize: 16
    }
});