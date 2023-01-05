import React, { useState, useContext } from 'react';
import { 
    Container, Spinner, ErrorMessage,
    FormLoginBox, FormLoginHeader, FormLoginH1, FormLoginH1Line, FormLoginBody, InputGroup, InputLabel, InputData, FormLoginBottom, Link
} from './styles';

import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../contexts/AuthContext';

export function Login({navigation}){
    const { signIn, loadingAuth, hasError } = useContext(AuthContext);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleLogin(){
        if(email === '' || password === ''){
            return;  
        }

        await signIn({ email, password });
    }

    return (
        <Container>

            <AppHeader/>

            <FormLoginBox>
                <FormLoginHeader>
                    <FormLoginH1>Entrar</FormLoginH1>
                    <FormLoginH1Line />
                </FormLoginHeader>

                <FormLoginBody>
                    <InputGroup>
                        <InputLabel>Login</InputLabel>
                        <InputData
                            placeholder='Insira seu e-mail'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLabel>Senha</InputLabel>
                        <InputData
                            placeholder='Insira sua senha'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </InputGroup>

                    { hasError ? (
                        <ErrorMessage>Usuário e/ou senha incorretos.</ErrorMessage>
                    ) : (<ErrorMessage></ErrorMessage>)}

                </FormLoginBody>

                <FormLoginBottom>
                    <Link onPress={() => navigation.navigate('Register')}>Não tem acesso? Cadastre-se.</Link>
                </FormLoginBottom>
            </FormLoginBox>

            { loadingAuth ? (
                <Spinner size={25} color="#2F9E41" />
            ) : (
                <AppButton 
                    text="Entrar" 
                    backgroundColor="#2F9E41" 
                    accessibilityLabel="Aperte este botão para acessar as funcionalidades do aplicativo"
                    onPress={handleLogin}
                />
            )}

        </Container>
    );
}
