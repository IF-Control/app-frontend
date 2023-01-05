import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// Icones
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import FeatherButton from '../../components/FeatherButton';
import FontAwesomeButton from '../../components/FontAwesomeButton';

// Estilo
import { ButtonQR } from './styles';

// Screens
import { Home } from '../Home/';
import { Alert } from '../Alert';
import { QRCode } from '../QRCode';
import { HealthTips } from '../HealthTips';
import { Covid } from '../Covid';
import { AuthContext } from '../../contexts/AuthContext';

import FormRoutes from '../../routes/form.routes';

const Tab = createBottomTabNavigator();

function Navbar() {
	const navigation = useNavigation();
	const { user } = useContext(AuthContext);
	const { signOut } = useContext(AuthContext);
	const greetings: string = "Olá, " + user.firstName;
	const linkEditProfilePage: any = 'Editar Perfil';
	
    return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: '#2F9E41',
				tabBarStyle: {
					height: 70,
					paddingTop: 10,
					paddingBottom: 10
				},
			}}
		>

			<Tab.Screen
				name= 'Home'
				component={FormRoutes}
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="Alertas"
				component={Alert}
				options={{
					headerTitle: () => (
						<FontAwesomeButton 
							onPress={() => navigation.navigate(linkEditProfilePage)} 
							color="#89BF92"
							accessibilityLabel="Botão para editar perfil"
							icon="user-circle"	
							text={greetings}					
						/>
					),
					headerRight: () => (
						<FeatherButton 
							onPress={signOut} 
							color="#110011" 
							accessibilityLabel="Botão para sair do aplicativo"
							icon="log-out"
						/>
					),
					tabBarLabel: 'Alertas',
					tabBarIcon: ({ color, size }) => (
						<Feather name="alert-triangle" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="QRCode"
				component={QRCode}
				options={{
					headerTitle: () => (
						<FontAwesomeButton 
							onPress={() => navigation.navigate(linkEditProfilePage)} 
							color="#89BF92"
							accessibilityLabel="Botão para editar perfil"
							icon="user-circle"	
							text={greetings}					
						/>
					),
					headerRight: () => (
						<FeatherButton 
							onPress={signOut} 
							color="#110011" 
							accessibilityLabel="Botão para sair do aplicativo"
							icon="log-out"
						/>
					),
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => (  
						<ButtonQR>
							<Ionicons name="qr-code-outline" color="#fff" size={40} />
						</ButtonQR>
					),
				}}
			/>

			<Tab.Screen
				name="Dicas de Saúde"
				component={HealthTips}
				options={{
					headerTitle: () => (
						<FontAwesomeButton 
							onPress={() => navigation.navigate(linkEditProfilePage)} 
							color="#89BF92" 
							accessibilityLabel="Botão para editar perfil"
							icon="user-circle"	
							text={greetings}				
						/>
					),
					headerRight: () => (
						<FeatherButton 
							onPress={signOut} 
							color="#110011" 
							accessibilityLabel="Botão para sair do aplicativo"
							icon="log-out"
						/>
					),
					tabBarLabel: 'Dicas de Saúde',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="clipboard-plus-outline" color={color} size={30}/>
					),
				}}
			/>

			<Tab.Screen
				name="COVID"
				component={Covid}
				options={{
					headerTitle: () => (
						<FontAwesomeButton 
							onPress={() => navigation.navigate(linkEditProfilePage)} 
							color="#89BF92" 
							accessibilityLabel="Botão para editar perfil"
							icon="user-circle"	
							text={greetings}				
						/>
					),
					headerRight: () => (
						<FeatherButton 
							onPress={signOut} 
							color="#110011" 
							accessibilityLabel="Botão para sair do aplicativo"
							icon="log-out"
						/>
					),
					tabBarLabel: 'COVID',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="coronavirus" color={color} size={35}/>
					),
				}}
			/>

  		</Tab.Navigator>
    );
}

export function MainContainer(){
  return (
    <NavigationContainer>
    	<Navbar />
    </NavigationContainer>
  );
}