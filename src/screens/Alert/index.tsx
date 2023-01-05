import React, { useEffect, useState, useCallback } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, SectionScroll, ContactAlert, AlertTitle, AlertText, AlertIcon, LoadingView } from './styles';
import { AppPageTitle } from '../../components/AppPageTitle';
import { useAlerts } from '../../services/models/getAlerts';
import { RefreshControl, StyleSheet, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export function Alert(props){
    const [ refreshing, setRefreshing ] = useState(false);
    const [ firstLoadDone, setFirstLoadDone ] = useState(false);
    const { isLoading, hasError, alertsList, loadAlerts } = useAlerts();

    useEffect(() => {
        if(props.route?.params?.refresh){
            onRefresh();
        }
    }, [props.route?.params]);
      
    const onRefresh = useCallback(async() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        if(!firstLoadDone){
            loadAlerts();
            setFirstLoadDone(true);
        }else if(refreshing){
            loadAlerts();
        }
    }, [loadAlerts, refreshing, firstLoadDone]);

    if(isLoading){
        return (
            <LoadingView>
                <ActivityIndicator size="small" color="#2F9E41" />
            </LoadingView>
        );
    }

    if(hasError){
        return (
            <LoadingView>
                <Text>
                    Desculpe ocorreu um erro, tente novamente mais tarde.
                </Text>
            </LoadingView>
        );
    }

    if(alertsList.length === 0 && firstLoadDone){
        return (
            <Container>
                <SectionScroll
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <LoadingView style={styles.alignCenter}>
                        <Text>
                            Não há nada por aqui...
                        </Text>
                    </LoadingView>
                </SectionScroll>
            </Container>
        );
    }

    return (
        <Container>
            <AppPageTitle name="Alertas" />
            <SectionScroll
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >

                {alertsList.map(alerta => (
                    <ContactAlert
                        key={alerta.id}
                    >
                        <AlertIcon color={alerta.message_type == 'Contato Direto' ? '#EF9A9A' : (alerta.message_type == 'Contato Indireto' ? '#f8c471' : '#FFF59D')}>
                            <Ionicons name={alerta.message_type == 'Contato Direto' ? 'alert-circle' : 'alert-circle-outline'} color={alerta.message_type == 'Contato Direto' ? '#D32F2F' : (alerta.message_type == 'Contato Indireto' ? '#e67e22' : '#FBC02D')} size={30} />
                        </AlertIcon>
                        
                        <AlertTitle>{alerta.message_type}</AlertTitle>
                        <AlertText>
                            Você entrou no ambiente {alerta.room} no dia {alerta.date} às {alerta.hour} {alerta.message_type == 'Contato Direto' ? 'e entrou em contato direto com alguém infectado com o vírus da COVID-19, é recomendável fazer o teste de contaminação.' : (alerta.message_type == 'Contato Indireto' ? 'após uma pessoa infectada com o vírus da COVID-19 ter passado por ele, é recomendável ficar atento aos sintomas.' : 'após um período maior que 3 horas em que a pessoa infectada com o vírus da COVID-19 esteve no ambiente.')}
                        </AlertText>
                    </ContactAlert>
                ))}

            </SectionScroll>
        </Container>
    );
}

const styles = StyleSheet.create({
    alignCenter: {
        marginTop: '65%',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center"
    }
});