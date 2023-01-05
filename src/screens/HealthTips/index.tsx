import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, StyleSheet, Dimensions, Image, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { AppPageTitle } from '../../components/AppPageTitle';
import { useHealthTips } from '../../services/models/getHealthTips';
import { Container, Card, ListItems, HealthTipDescriptionText, HealthTipName, LoadingView, SectionScroll } from './styles';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const { width } = Dimensions.get('window');

export function HealthTips(props){
    const { isLoading, hasError, healthTipsList, loadHealthTips } = useHealthTips();
    const [ firstLoadDone, setFirstLoadDone ] = useState(false);
    const [ refreshing, setRefreshing ] = useState(false);

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
            loadHealthTips();
          setFirstLoadDone(true);
        }else if(refreshing){
            loadHealthTips();
        }
    }, [loadHealthTips, refreshing, firstLoadDone]);

    if(isLoading){
        return (
            <LoadingView>
                <ActivityIndicator size={25} color="#2F9E41" />
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

    if(healthTipsList.length === 0 && firstLoadDone){
        return (
            <LoadingView>
                <Text>
                    Não há nada por aqui...
                </Text>
            </LoadingView>
        );
    }

    return (
        <Container>
            <AppPageTitle name="Dicas de Saúde" />
            <SectionScroll
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <ListItems>
                    { healthTipsList.map(tip => ( 
                        <Card 
                            key={tip.id}
                            style={styles.card}
                        >
                            <View style={styles.padding}>
                                <HealthTipName>{tip.name}</HealthTipName>
                            </View>
                
                            <View style={styles.alignImage}>
                                <Image 
                                    style={styles.img}
                                    source={{uri: 'https://ifsp-control.herokuapp.com/files/'+tip.image}}
                                />
                            </View>
                
                            <View style={styles.padding}>
                                <HealthTipDescriptionText>{tip.description}</HealthTipDescriptionText>
                            </View>
                        </Card>
                    ))}
                </ListItems>
            </SectionScroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    card: {
        width: width * .9,
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    img: {
        width: width * .9 - 40,
        height: width * .9 - 40
    },
    padding: {
        padding: 12
    },
    alignImage: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center"
    }
});