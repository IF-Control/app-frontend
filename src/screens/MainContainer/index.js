import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icones
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

// Estilo
import { ButtonQR } from './styles';

// Screens
import { Home } from '../Home/index.tsx';
import { Alert } from '../Alert';
import { QRCode } from '../QRCode';
import { HealthTips } from '../HealthTips';
import { Covid } from '../Covid';
import { AuthContext } from '../../contexts/AuthContext';
import { Map } from '../Map';

const Tab = createBottomTabNavigator();

function Navbar() {
	const { user } = useContext(AuthContext);
	const userName = (user.name).split(" ");

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
				component={Home}
				options={{
					headerTitle: "Olá, " + userName[0],
					headerRight: () => (
						<Feather name="list" size={30} color="black" style={{marginRight: 15}} />
					),
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="Mapa"
				component={Map}
				options={{
					headerTitle: "Olá, " + userName[0],
					headerRight: () => (
						<Feather name="list" size={30} color="black" style={{marginRight: 15}} />
					),
					tabBarLabel: 'Mapa',
					tabBarIcon: ({ color, size }) => (
						<Feather name="map" color={color} size={30} />
					),
				}}
			/>

			<Tab.Screen
				name="QRCode"
				component={QRCode}
				options={{
					headerTitle: "Olá, " + userName[0],
					headerRight: () => (
						<Feather name="list" size={30} color="black" style={{marginRight: 15}} />
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
					headerTitle: "Olá, " + userName[0],
					headerRight: () => (
						<Feather name="list" size={30} color="black" style={{marginRight: 15}} />
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
					headerTitle: "Olá, " + userName[0],
					headerRight: () => (
						<Feather name="list" size={30} color="black" style={{marginRight: 15}} />
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