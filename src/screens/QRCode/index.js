import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { api } from '../../services/api';
import CountDown from 'react-native-countdown-component';
import { Container, FirstText } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function QRCode(){
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ movement, setMovement ] = useState(null);
    const [ scanned, setScanned ] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    async function checkIn(data){
        try{
            const response = await api.post('/checkin', {
                room_id: data
            });

            setMovement(response.data["movement"]);

            await AsyncStorage.setItem('@ifcontrolmovementcheck', JSON.stringify(response.data["movement"]));

            alert('Check-In realizado com sucesso!\n\nVocê pode realizar o Check-Out lendo o mesmo QR Code.\n\nO Check-Out será realizado automaticamente depois de 2 horas de permanência na sala.');
        }catch (error){
            alert('Erro na leitura do QR-Code, por favor tente novamente.');
        }
    }

    async function checkOut(data){
        try{
            const response = await api.patch('/checkout', {
                room_id: data,
                movement_id: movement["id"]
            });

            await AsyncStorage.removeItem('@ifcontrolmovementcheck');

            setMovement(null);

            alert('Check-Out realizado com sucesso!');
        }catch (error){
            alert('Erro na realização do check-out.');
        }
    }

    const handleBarCodeScanned = ({ type, data }) => {
        if(type == 256){
            if(movement){
                checkOut(data);
            }else{
                checkIn(data);
            }
        }else{
            alert('QR-Code inválido.')
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
            
            {
                movement && 
                <CountDown
                    until={7200}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{h: 'Hrs', m: 'Min', s: 'Seg'}}
                    onFinish={() => checkOut()}
                    size={14}
                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#2F9E41'}}
                    digitTxtStyle={{color: '#2F9E41'}}
                    style={{
                        display: 'none'
                    }}
                />
            }

            {scanned && <Button title={'Aperte para escanear novamente'} onPress={() => setScanned(false)} />}
        </Container>
    );
}
