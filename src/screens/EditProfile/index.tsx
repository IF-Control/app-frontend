import React, { useContext, useState, useEffect } from 'react';
import { 
    Container, ContainerBody,
    FormBox, FormHeader, FormH1, FormH1Line, FormBody, 
    InputGroup, InputLabel, InputData, ErrorMessage, Spinner, SuccessMessage
} from './styles';

import {Picker} from '@react-native-picker/picker';
const Item: any = Picker.Item;

import AppButton from '../../components/AppButton';
import { StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { setNewUserData } from '../../services/models/setNewUserData';

export function EditProfile(){
    const { user, setNewUserProfileData } = useContext(AuthContext);
    const [ IsVisible, setIsVisible ] = useState(false);
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ requestResult, setRequestResult ] = useState(null);
    const [ group_of_risk, setGroupOfRisk ] = useState(user.group_of_risk ? user.group_of_risk : false);
    const [ course, setCourse ] = useState(user.course ? user.course : '');
    const [ name, setName ] = useState(user.name ? user.name : '');
    const [ vaccineDoses, setVaccineDoses ] = useState<any>(user.vaccine_doses ? user.vaccine_doses : 0);

    useEffect(() => {
        if(user.type == 'Estudante'){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    });

    async function handleEditProfile(){
        setError('');
        setIsLoading(true);

        if(name === '' || vaccineDoses === ''){
            setError("Dados incorretos.");
            setIsLoading(false);
            setRequestResult(null);
            return;  
        }

        try{
            const result = await setNewUserData.execute({
                name,
                vaccine_doses: parseInt(vaccineDoses),
                group_of_risk,
                course
            });

            let firstUserName: any = name.split(" ");
            firstUserName = firstUserName[0];
            
            setRequestResult(result);

            setNewUserProfileData({
                name,
                firstUserName,
                vaccine_doses: parseInt(vaccineDoses),
                group_of_risk,
                course
            });
        }catch(e){
            setError(e.response.data.error);
            setRequestResult(null);
        }finally{
            setIsLoading(false);
        }
    }

    function hasError(){
        if(error){
            return (
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            );
        }
    }

    function succesfulySend(){
        if(requestResult){
            return (
                <SuccessMessage>
                    Perfil editado com sucesso.
                </SuccessMessage>
            );
        }
    }

    function coursesSelectList(){
        if(!IsVisible){
            return;
        }

        return (
            <InputGroup>
                <InputLabel>Curso</InputLabel>
                <Picker
                    testID="course-picker"
                    selectedValue={course}
                    onValueChange={(c) => setCourse(c)}
                    accessibilityLabel="Defina em qual curso está matrículado na instituição"
                    dropdownIconColor="#005600"
                    prompt="Escolha seu curso"
                    mode="dialog"
                    style={styles.pickerStyle}
                >
                    <Item
                        label="Mecatrônica"
                        value="Mecatrônica"
                    />
                    <Item
                        label="Informática para Internet"
                        value="Informática"
                    />
                    <Item
                        label="Automação Industrial"
                        value="Aut. Industrial"
                    />
                    <Item
                        label="Engenharia Controle e Automação"
                        value="Eng. Controle e Automação"
                    />
                    <Item
                        label="Matemática"
                        value="Matemática"
                    />
                    <Item
                        label="Análise e Desenvolvimento de Sistemas"
                        value="ADS"
                    />
                    <Item
                        label="Gestão de Sistemas da Informação"
                        value="GSI"
                    />
                    <Item
                        label="Outros (Extensão)"
                        value="Outros"
                    />
                </Picker>
            </InputGroup>
        );
    }

    return (
        <Container>     
            <ContainerBody>
                <FormBox>
                    <FormHeader>
                        <FormH1>Editar Perfil</FormH1>
                        <FormH1Line />
                    </FormHeader>

                    <FormBody>

                        <InputGroup>
                            <InputLabel>Insira seu nome</InputLabel>
                            <InputData
                                placeholder='Digite seu nome completo'
                                value={name}
                                onChangeText={setName}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Quantidade de doses de vacina</InputLabel>
                            <InputData
                                placeholder='Exemplo: 3'
                                keyboardType='numeric'
                                maxLength={1}
                                onChangeText={(v) => setVaccineDoses(v)}
                                value={vaccineDoses.toString()}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Grupo de risco</InputLabel>
                            <Picker
                                testID="group_of_risk-picker"
                                accessibilityLabel="Defina se faz parte de algum grupo de risco da COVID-19"
                                dropdownIconColor="#005600"
                                mode='dropdown'
                                onValueChange={(gr: boolean) => setGroupOfRisk(gr)}
                                selectedValue={group_of_risk}
                                style={{
                                    backgroundColor: '#FFF',
                                }}
                            >
                                <Item
                                    label="Não"
                                    value={false}
                                    style={styles.inputSelect}
                                />
                                <Item
                                    label="Sim"
                                    value={true}
                                    style={styles.inputSelect}
                                />
                            </Picker>
                        </InputGroup>

                        {coursesSelectList()}
                        {hasError()}
                        {succesfulySend()}
                        
                    </FormBody>

                    { isLoading ? (
                        <Spinner size={25} color="#2F9E41" />
                    ) : (
                        <AppButton 
                            text="Salvar" 
                            backgroundColor="#2F9E41" 
                            accessibilityLabel="Aperte este botão para salvar suas informações e editar seu perfil."
                            onPress={handleEditProfile}
                        />
                    )}
                    
                </FormBox>
            </ContainerBody>
        </Container>
    );
}

const styles = StyleSheet.create({
    inputSelect: {
        color: '#414141',
        backgroundColor: '#fff',
        padding: 8,
        fontSize: 16
    },
    inputSelectDisabled: {
        color: '#A7A7A7',
        backgroundColor: '#d8d8d8',
        padding: 8,
        fontSize: 16
    },
    pickerStyle:{
        backgroundColor: '#fff',
    },
    pickerStyleDisabled:{
        backgroundColor: '#d8d8d8'
    }
});