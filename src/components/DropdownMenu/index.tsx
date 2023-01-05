import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';

export default function DropdownMenu(){
    const [ visible, setVisible ] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const { user } = useContext(AuthContext);
	const { signOut } = useContext(AuthContext);
	const userName = (user.name).split(" ");
	const greetings = "Olá, " + userName[0]  + "!";

    const navigation = useNavigation();

    return (
        <Provider>
            <View style={{
                paddingTop: '10%',
                paddingLeft: 15,
                flexDirection: 'row',
                backgroundColor: '#FFF',
            }}>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 20,
                        paddingTop: 5
                }}>
                {greetings}
                </Text>
                <Menu 
                    style={{
                        position: 'absolute',
                        zIndex: 13,
                        elevation: 13,
                    }}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button onPress={openMenu}>
                            <Feather name="menu" size={24} color="black" />
                        </Button>
                    }
                >
                    <Menu.Item onPress={() => navigation.navigate('Editar Perfil')} title="Editar Perfil" />
                    <Menu.Item onPress={() => navigation.navigate('Comprovante vacinal')} title="Vacina" />
                    <Divider />
                    <Menu.Item onPress={signOut} title="Sair" />
                </Menu>
            </View>
        </Provider>
    );
}