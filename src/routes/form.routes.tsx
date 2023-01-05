import React, { useContext } from 'react';
import { Home } from '../screens/Home';
import { EditProfile } from '../screens/EditProfile';
import { VaccinationCertificate } from '../screens/VaccinationCertificate';

import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';
import FeatherButton from '../components/FeatherButton';
import FontAwesomeButton from '../components/FontAwesomeButton';

const Stack = createStackNavigator();

export default function FormRoutes(){
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
	const { signOut } = useContext(AuthContext);
    const linkEditProfilePage: any = 'Editar Perfil';

    return (
        <Stack.Navigator
            initialRouteName="Main"
        >
            <Stack.Screen 
                name="Main" 
                component={Home} 
                options={{ 
                    headerTitle: () => (
						<FontAwesomeButton 
							onPress={() => navigation.navigate(linkEditProfilePage)} 
							color="#89BF92" 
							accessibilityLabel="Botão para editar perfil"
							icon="user-circle"
							text={"Olá, " + user.firstName}					
						/>
					),
					headerRight: () => (
						<FeatherButton 
							onPress={signOut} 
							color="#110011" 
							accessibilityLabel="Botão para sair do aplicativo"
							icon="log-out"
						/>
					)
                }}
            />
            <Stack.Screen name="Editar Perfil" component={EditProfile} />
        </Stack.Navigator>
    );
};
