import React, { useContext } from 'react';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../contexts/AuthContext';
import { View } from 'react-native';
import { } from './styles';

export function HealthTips(){
    const { signOut } = useContext(AuthContext);

    return (
        <View>

            <AppButton
                text="LogOut" 
                onPress={signOut}
                backgroundColor="#e53935" 
                accessibilityLabel="Botão para sair do aplicativo"
            />

        </View>
    )
}
