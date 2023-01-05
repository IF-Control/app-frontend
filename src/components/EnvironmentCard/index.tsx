import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Card,  EnvironmentContainer, Buildings, BuildingButton, Line, TextBuilding} from './styles';
import { BuildingCardRoom } from '../BuildingCardRoom';
import { useEnvironment } from '../../services/models/getEnvironments';
import { ActivityIndicator } from 'react-native';

type Room = {
  id: string;
  name: string;
  type: string;
  status: string;
  capacity: number;
  movements: any;
}

type Environment = {
  id: string;
  name: string;
  rooms: Room[];
}

type Props = {
  refreshing?: boolean;
}

export function EnvironmentCard(props:Props){
  const { isLoading, hasError, rooms, loadEnvironments } = useEnvironment();
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment | undefined>();
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  //Faz o carregamento
  useEffect(() => {
    if(!firstLoadDone){
      loadEnvironments();
      setFirstLoadDone(true);
    }else if(props.refreshing){
      loadEnvironments();
    }
  }, [loadEnvironments, props.refreshing, firstLoadDone]);

  //Controla o selecionado
  useEffect(() => {
    if(rooms.length <= 0){
      return;
    }
    if(!selectedEnvironment){
      setSelectedEnvironment(rooms[0]);
    }else{
      const roomToSelect = rooms.find(room => room.id === selectedEnvironment.id);
      setSelectedEnvironment(roomToSelect);
    }
  }, [rooms, selectedEnvironment]);

  if(isLoading){
    return <View><ActivityIndicator  size="small" color="#2F9E41"/></View>
  }

  if(hasError){
    return <Text>Desculpe ocorreu um erro, tente novamente.</Text>
  }

  return (
    <Card>
       <Buildings>
        { rooms.map(environment => (
          <BuildingButton
            key={environment.id}
            onPress={() => setSelectedEnvironment(environment)}
            selected={environment.id === selectedEnvironment?.id}
          >
            <TextBuilding selected={environment.id === selectedEnvironment?.id}>{ environment.name }</TextBuilding>        
            <Line selected={environment.id === selectedEnvironment?.id} ></Line>
          </BuildingButton>
        )) }

      </Buildings>
      <EnvironmentContainer>
        { selectedEnvironment && selectedEnvironment.rooms.map(room => (
          <BuildingCardRoom key={room.id} buildingTitle={selectedEnvironment.name} room={room} />
        )) }
      </EnvironmentContainer>
    </Card>
  );
}
