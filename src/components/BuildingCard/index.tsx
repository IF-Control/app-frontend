import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Card, Buildings, BuildingButton, BuildingData, Line, TextBuilding } from './styles';
import { BuildingCardRoom } from '../BuildingCardRoom';
import { useBuildings } from '../../services/models/getBuildings';
import { ActivityIndicator } from 'react-native';

type Room = {
  id: string;
  name: string;
  type: string;
  capacity: number;
  movements: any;
}

type Building = {
  id: string;
  name: string;
  rooms: Room[];
}

type Props = {
  refreshing?: boolean;
}

export function BuildingCard(props:Props){
  const { isLoading, hasError, rooms, loadBuildings } = useBuildings();
  const [selectedBuilding, setSelectedBuilding] = useState<Building | undefined>();
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  //Faz o carregamento
  useEffect(() => {
    if(!firstLoadDone){
      loadBuildings();
      setFirstLoadDone(true);
    }else if(props.refreshing){
      loadBuildings();
    }
  }, [loadBuildings, props.refreshing, firstLoadDone]);

    //Controla o selecionado
    useEffect(() => {
      if(rooms.length <= 0){
        return;
      }
      if(!selectedBuilding){
        setSelectedBuilding(rooms[0]);
      }else{
        const roomToSelect = rooms.find(room => room.id === selectedBuilding.id);
        setSelectedBuilding(roomToSelect);
      }
    }, [rooms, selectedBuilding]);

    if(isLoading){
      return <View><ActivityIndicator  size="small" color="#2F9E41"/></View>
    }
  
    if(hasError){
      return <Text>Desculpe ocorreu um erro, tente novamente.</Text>
    }

  return (
    <Card>
      {/* Cabeçalho */}
      <Buildings>
        { rooms.map(building => (
          <BuildingButton
            key={building.id}
            onPress={() => setSelectedBuilding(building)}
            selected={building.id === selectedBuilding?.id}
          >
            <TextBuilding selected={building.id === selectedBuilding?.id}>{ building.name }</TextBuilding>
            <Line selected={building.id === selectedBuilding?.id} ></Line>
          </BuildingButton>
        )) }

      </Buildings>

      {/* Conteúdo */}
      <BuildingData>
        { selectedBuilding && selectedBuilding.rooms.map(room => (
          <BuildingCardRoom key={room.id} buildingTitle={selectedBuilding.name} room={room} />
        )) }
      </BuildingData>
    </Card>
  );
}
