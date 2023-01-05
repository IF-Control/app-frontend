import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Container, FirstText } from './styles';
import { setCheckin } from '../../services/models/setCheckin';
import { setCheckout } from '../../services/models/setCheckout';

export function QRCode({ navigation }){
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ userAction, setUserAction ] = useState(null);
    const [ scanned, setScanned ] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setScanned(false);
            setHasPermission(null);
            (async () => {
                const { status } = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === 'granted'); 
            })();
          });

          return unsubscribe;
    }, [navigation]);

    async function checkIn(qrCodeData: string){
        try{
            const response = await setCheckin.execute(qrCodeData);
            setUserAction(response);

            Alert.alert('Sucesso', 'Check-In realizado com sucesso!\n\nVocê pode realizar o Check-Out lendo o mesmo QR Code.\n\nO Check-Out será realizado automaticamente depois de 2 horas de permanência na sala ou ao realizar Check-In em outra sala.');
            navigation.navigate('Home', {refresh: true});
        }catch(error){
            Alert.alert('Erro', 'Erro na leitura do QR-Code, por favor tente novamente.');
        }
    }

    async function checkOut(qrCodeData: string, message: boolean){
        const dataEntry = {
            room_id: qrCodeData,
            movement_id: (userAction.movement.id)
        }

        try{
            await setCheckout.execute(dataEntry);
            setUserAction(null);
    
            if(message){
                Alert.alert('Sucesso', 'Check-Out realizado com sucesso!');
                navigation.navigate('Home', {refresh: true});
            }
        }catch(error){
            Alert.alert('Erro', 'Erro na realização do check-out.');
        }
    }

    const handleBarCodeScanned = ({ type, data }) => {
        if(type == 256){
            if(userAction != null){
                if(userAction.movement.room_id != data){
                    //Check-In em uma sala diferente
                    checkIn(data);
                }else{
                    //Leu o mesmo QR Code e fez o Checkout na sala
                    checkOut(data, true);
                }
            }else{
                //Primeiro Check-In
                checkIn(data);
            }
        }else{
            Alert.alert('Erro', 'QR-Code inválido.');
        }
        setScanned(true);
    }
    
    if(hasPermission === null){
        return <FirstText>Pedindo permissão de acesso a câmera...</FirstText>;
    }

    if(hasPermission === false){
        return <FirstText>Sem acesso a câmera.</FirstText>;
    }

    return (
        <Container>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                style={StyleSheet.absoluteFillObject}
            >
                <FirstText>IF Control</FirstText>  

            </BarCodeScanner>
          
            {scanned && <Button title={'Aperte para escanear novamente'} onPress={() => setScanned(false)} />}
        </Container>
    );
}
