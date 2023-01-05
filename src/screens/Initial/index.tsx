import React from 'react';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import Logo from '../../assets/imgs/logo-IFSP.png';
import { Container, Image } from './styles';

export function Initial({navigation}){
    return (
        <Container>
            <Image 
                source={Logo}
            />

            <AppHeader/>

            <AppButton 
                onPress={() => navigation.navigate('Login')}
                text="Entrar" 
                backgroundColor="#2F9E41" 
                accessibilityLabel="Botão para ir a página de Login do aplicativo"
            />

            <AppButton 
                onPress={() => navigation.navigate('Register')} 
                text="Cadastro" 
                backgroundColor="#005600" 
                accessibilityLabel="Botão para ir a página de Cadastro do aplicativo"
            />

        </Container>
    );
}
