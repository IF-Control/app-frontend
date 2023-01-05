import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { 
    Container, ContainerBody, ErrorMessage,
    FormLoginBox, FormLoginHeader, FormLoginH1, FormLoginH1Line, FormLoginBody, 
    InputGroup, InputLabel, InputData, FormLoginBottom, Link, Spinner,
    Content, Title, View, RadioBtn, RadioTxt, Row
} from './styles';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const Item: any = Picker.Item;

import Ionicons from '@expo/vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import { setRegisterUser } from '../../services/models/setRegisterUser';

export function Register({ navigation }){
    const [ isEditable, setIsEditable ] = useState(false);
    const [ terms, setTerms ] = useState('');
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const [ type, setType ] = useState('Visitante');
    const [ group_of_risk, setGroupOfRisk ] = useState(false);
    const [ course, setCourse ] = useState(isEditable && type == 'Estudante' ? 'Mecatrônica' : null);

    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ enrollment, setEnrollment ] = useState('');
    const [ vaccine_doses, setVaccineDoses ] = useState('');

    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ validateInput, setValidateInput ] = useState({
        special: false,
        case: false,
        number: false,
        length: false
    });

    const secureText = (passwd: string) => {
        const regexSpecials = new RegExp(/\W|_/)
        const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
        const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
        const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)
        const length = passwd.length >= 6

        setValidateInput({
            special: regexSpecials.test(passwd),
            case: regexUppercase.test(passwd) && regexLowercase.test(passwd),
            number: regexNumber.test(passwd),
            length
        });

        setPassword(passwd)
    }

    useEffect(() => {
        if(type != 'Visitante'){
            setIsEditable(true)
            if(type != 'Estudante'){
                setCourse(null)
            }
        }else{
            setIsEditable(false)
            setEnrollment('')
            setCourse(null)
        }
    });

    async function handleRegister(){
        if(password != confirmPassword){
            setError("Senhas são diferentes.");
            return;  
        }

        if(
            email === '' || 
            password === '' || 
            type === '' ||
            password === '' ||
            confirmPassword === '' ||
            vaccine_doses === '' ||
            !validateInput.case || !validateInput.length || !validateInput.number || !validateInput.special || terms == ''
        ){
            return;  
        }

        setError('');
        setIsLoading(true);

        const newUser = await setRegisterUser.execute({
            name,
            email,
            password,
            type,
            enrollment,
            vaccine_doses,
            course,
            group_of_risk
        }); 
        
        if(newUser.erro){
            setError(newUser.erro);
        }else{
            setError('');
            setTerms('');
            setType('Visitante');
            setGroupOfRisk(false);
            setCourse(isEditable && type == 'Estudante' ? 'Mecatrônica' : null);
            setEmail('');
            setName('');
            setEnrollment('');
            setVaccineDoses('');
            setPassword('');
            setConfirmPassword('');

            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!\n\nAgora você pode realizar o Login no aplicativo.');
            navigation.navigate('Login');
        }

        setIsLoading(false);
    }

    function emptyField(){
        if(!isEditable){
            return (
                <Item
                    label=""
                    value={null}
                    style={isEditable ? styles.inputSelect : styles.inputSelectDisabled}
                />
            );
        }
    }

    return (
        <Container>
            <ContainerBody>
                <AppHeader />

                <FormLoginBox>
                    <FormLoginHeader>
                        <FormLoginH1>Cadastro</FormLoginH1>
                        <FormLoginH1Line />
                    </FormLoginHeader>

                    <FormLoginBody>
                        <InputGroup>
                            <InputLabel>Vínculo com o IFSP</InputLabel>

                            <Picker
                                testID="type-user-picker"
                                selectedValue={type}
                                onValueChange={(t) => setType(t)}
                                accessibilityLabel="Defina o tipo do seu vínculo com a instituição"
                                dropdownIconColor="#005600"
                                mode="dropdown"
                                style={{
                                    backgroundColor: '#FFF'
                                }}
                            >
                                <Item
                                    label="Visitante"
                                    value="Visitante"
                                    style={styles.inputSelect}
                                />
                                <Item
                                    label="Estudante"
                                    value="Estudante"
                                    style={styles.inputSelect}
                                />
                                <Item
                                    label="Docente"
                                    value="Docente"
                                    style={styles.inputSelect}
                                />
                                <Item
                                    label="Colaborador"
                                    value="Colaborador"
                                    style={styles.inputSelect}
                                />
                            </Picker>
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Prontuário/Matrícula</InputLabel>
                            <InputData
                                underlineColorAndroid="transparent"
                                style={[{
                                        backgroundColor: isEditable ? '#FFF' : '#d8d8d8',
                                    }]}
                                editable={isEditable}
                                placeholder={isEditable ? 'Ex: GU1234567' : 'Não habilitado'}
                                value={enrollment}
                                onChangeText={setEnrollment}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Insira seu nome</InputLabel>
                            <InputData
                                placeholder='Digite seu nome completo'
                                value={name}
                                onChangeText={setName}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Insira seu e-mail</InputLabel>
                            <InputData
                                placeholder='email@ifsp.edu.br'
                                value={email}
                                onChangeText={setEmail}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Senha</InputLabel>
                            <InputData
                                placeholder='********'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(passwd) => {
                                    secureText(passwd)
                                }}
                                // onChangeText={setPassword}
                            />

                            <Content>
                                <Title>Sua senha deve ter:</Title>

                                <View>
                                    {validateInput.special ? <Ionicons name="checkmark-circle" color="#2F9E41" size={16} /> : <Ionicons name="close-circle" color="#CF3C3C" size={16} />}
                                    <Text>Pelo menos um caractere especial</Text>
                                </View>
                                <View>
                                    {validateInput.length ? <Ionicons name="checkmark-circle" color="#2F9E41" size={16} /> : <Ionicons name="close-circle" color="#CF3C3C" size={16} />}
                                    <Text>Pelo menos 6 caracteres</Text>
                                </View>
                                <View>
                                    {validateInput.number ? <Ionicons name="checkmark-circle" color="#2F9E41" size={16} /> : <Ionicons name="close-circle" color="#CF3C3C" size={16} />}
                                    <Text>Números</Text>
                                </View>
                                <View>
                                    {validateInput.case ? <Ionicons name="checkmark-circle" color="#2F9E41" size={16} /> : <Ionicons name="close-circle" color="#CF3C3C" size={16} />}
                                    <Text>Letras maiúsculas e letras minúsculas</Text>
                                </View>
                            </Content>

                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Confirme sua senha</InputLabel>
                            <InputData
                                placeholder='********'
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Quantas doses da vacina contra a COVID-19 você tomou?</InputLabel>
                            <InputData
                                placeholder='Exemplo: 3'
                                keyboardType='numeric'
                                value={vaccine_doses}
                                onChangeText={setVaccineDoses}
                                maxLength={1}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>É aluno de qual curso?</InputLabel>
                            <Picker
                                testID="course-picker"
                                selectedValue={course}
                                onValueChange={(c) => setCourse(c)}
                                accessibilityLabel="Defina em qual curso está matrículado na instituição"
                                dropdownIconColor="#005600"
                                prompt="Escolha seu curso"
                                mode="dialog"
                                style={isEditable && type == 'Estudante' ? styles.pickerStyle : styles.pickerStyleDisabled}
                                enabled={isEditable && type == 'Estudante' ? true : false}
                            >
                                {emptyField()}
                                <Item
                                    label="Mecatrônica"
                                    value="Mecatrônica"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Informática para Internet"
                                    value="Informática"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Automação Industrial"
                                    value="Aut. Industrial"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Engenharia Controle e Automação"
                                    value="Eng. Controle e Automação"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Matemática"
                                    value="Matemática"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Análise e Desenvolvimento de Sistemas"
                                    value="ADS"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Gestão de Sistemas da Informação"
                                    value="GSI"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                                <Item
                                    label="Outros (Extensão)"
                                    value="Outros"
                                    style={isEditable && type == 'Estudante' ? styles.inputSelect : styles.inputSelectDisabled}
                                />
                            </Picker>
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Faz parte de grupo de risco?</InputLabel>
                            <Picker
                                testID="group_of_risk-picker"
                                selectedValue={group_of_risk}
                                onValueChange={(g) => setGroupOfRisk(g)}
                                accessibilityLabel="Defina se faz parte de algum grupo de risco da COVID-19"
                                dropdownIconColor="#005600"
                                mode='dropdown'
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

                        <InputGroup>
                            <Row>
                                <RadioBtn>
                                    <RadioButton 
                                        value='read' 
                                        status={ terms === 'read' ? 'checked' : 'unchecked' } 
                                        onPress={() => {
                                            setTerms('read');
                                        }}  
                                        color="#2F9E41" 
                                    />
                                </RadioBtn>
                                <RadioTxt>Li e aceito os <Link onPress={() => navigation.navigate('Terms')}>Termos de Uso e o Acordo de Licença de Usuário Final.</Link></RadioTxt>
                            </Row>
                        </InputGroup>

                    </FormLoginBody>

                    <FormLoginBottom>
                        <Link onPress={() => navigation.navigate('Login')}>Já tem acesso? Faça o Login.</Link>
                    </FormLoginBottom>

                    <ErrorMessage>{error ? error : ''}</ErrorMessage>
                </FormLoginBox>

                { isLoading ? (
                    <Spinner size={25} color="#2F9E41" />
                ) : (
                    <AppButton 
                        text="Cadastrar" 
                        backgroundColor="#005600" 
                        accessibilityLabel="Aperte este botão para enviar suas informações e se cadastrar no aplicativo"
                        onPress={handleRegister}
                    />
                )}
                
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