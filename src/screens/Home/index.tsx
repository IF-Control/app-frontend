import React, { useEffect } from 'react';
import { Container, TitleType, TabSection } from './styles';
import { BuildingCard } from '../../components/BuildingCard';
import { EnvironmentCard } from '../../components/EnvironmentCard';
import { AppPageTitle } from '../../components/AppPageTitle';
import { RefreshControl } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export function Home(props){
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        if(props.route?.params?.refresh){
            onRefresh();
        }
    }, [props.route?.params]);
      
    const onRefresh = React.useCallback(async() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <Container
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >       
            <AppPageTitle name="Ambientes do Campus" />
           
            <TabSection>
                <TitleType>Prédios</TitleType>
                <BuildingCard refreshing={refreshing}/>

                <TitleType>Ambientes</TitleType>
                <EnvironmentCard refreshing={refreshing}/>
            </TabSection>
        </Container>
    );
}
