import React from 'react';
import { Text, View} from 'react-native';
import AppProgressBar from '../AppProgressBar';
import { Container, ContainerProgressBar, Name, Ocupation } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 

type Room = {
  id: string;
  name: string;
  type: string;
  status: string;
  capacity: number;
  movements: any;
}

type Props = {
  buildingTitle: string;
  room: Room;
}

function percentageColorText(occupationPercentage: number){
  return (occupationPercentage > 80 ? '#f4511e' : (occupationPercentage > 50 ? '#ffc107' : '#32CD32'));
}

export function BuildingCardRoom({ room }: Props) {

  function checkRoomStatus(status: string){
    switch(status){
      case 'Manutenção':
        return (
          <Text>
            - {status} <Ionicons name="warning" color="#FBC02D" size={16} />
          </Text>
        );
        break;
      case 'Interditada':
        return (
          <Text>
            - {status} <MaterialIcons name="block" color="#f4511e" size={16} />
          </Text>
        );
        break;
      case 'Em Limpeza':
        return (
          <Text>
            - {status} <MaterialIcons name="cleaning-services" color="#ffc107" size={16} />
          </Text>
        );
        break;
      case 'Contaminada':
        return (
          <Text>
            - {status} <MaterialIcons name="coronavirus" color="#005600" size={16} />
          </Text>
        );
        break;
      default:
        break;
    }
  }

  return (
    <View> 
      <Container>
        <Name>{ (room.type == 'Espaço Comum' ? '' : room.type) } { room.name } {checkRoomStatus(room.status)}</Name>
        <Ocupation>{ (room.movements).length }/{ room.capacity }</Ocupation>
      </Container>

      <AppProgressBar progress={(room.movements).length / room.capacity } color={percentageColorText((room.movements).length / room.capacity)}/>
      <ContainerProgressBar>
        <Ocupation>{ Math.round(((room.movements).length / room.capacity) * 100) }%</Ocupation>
      </ContainerProgressBar>
    </View>
  );
}
