import React from 'react';
import { ScrollView } from 'react-native';
import { 
    Container,
    FormLoginBox, FormLoginHeader, FormLoginH1, FormLoginH1Line, FormLoginBody, InputGroup, InputLabel, InputData, FormLoginBottom, Link
 } from './styles';

 import AppHeader from '../../components/AppHeader/';
 import AppButton from '../../components/AppButton';

export function Register({navigation}){
    return (
        <Container>
            <ScrollView>

                <AppHeader />

                <FormLoginBox>
                    <FormLoginHeader>
                        <FormLoginH1>Cadastro</FormLoginH1>
                        <FormLoginH1Line />
                    </FormLoginHeader>

                    <FormLoginBody>
                        <InputGroup>
                            <InputLabel>Insira seu cargo</InputLabel>
                            <InputData
                                placeholder='Insira seu prontuário'
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Prontuário</InputLabel>
                            <InputData
                                placeholder='Insira seu prontuário'
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Senha</InputLabel>
                            <InputData
                                placeholder='Insira sua senha'
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLabel>Confirme sua senha</InputLabel>
                            <InputData
                                placeholder='Insira sua confirmação de senha'
                            />
                        </InputGroup>

                    </FormLoginBody>

                    <FormLoginBottom>
                        <Link onPress={() => navigation.navigate('Login')}>Já tem acesso? Faça o Login.</Link>
                    </FormLoginBottom>
                </FormLoginBox>

                <AppButton 
                    text="Cadastrar" 
                    backgroundColor="#005600" 
                    accessibilityLabel="Aperte este botão para enviar suas informações e se cadastrar no aplicativo"
                />               
            
            </ScrollView>
        </Container>
    );
}