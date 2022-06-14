import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RefreshBtn from '../../components/RefreshBtn';
import { api } from '../../services/api';
import { Container, TitleBox, Title, Line } from './styles';

type RoomProps = {
    name: string,
	capacity: number,
	type: string,
	status: string,
	building_id: string,
    movements: number | null
}

type BuildingProps = {
	id: string,
    name: string,
    rooms: RoomProps
}

export function Home(){
    const [ rooms, setRooms ] = useState<BuildingProps[] | [] >([]);
    const [ refreshing, setRefreshing ] = useState(false);

    const { width } = Dimensions.get('window');

    useEffect(() => {
        loadRooms();
    }, []);

    async function loadRooms(){
        const response = await api.get('/rooms');
        setRefreshing(false);
        setRooms(response.data);
    }

    function occupationPercentage(numberOccupants: number, capacityMax: number){
        return (numberOccupants > 0 ? (Number(((numberOccupants * 100) / capacityMax).toFixed(1))) : 0);
    }

    function percentageColorText(occupationPercentage: number){
        return (occupationPercentage > 80 ? '#f4511e' : (occupationPercentage > 50 ? '#ffc107' : '#64dd17'));
    }

    const onRefresh = () => {
        setRefreshing(true);
        loadRooms();
    };

    return (
        <Container>

            <TitleBox>
                <Title>Ambientes do Campus</Title>
                <Line />
            </TitleBox>
           
            <View>

                <View
                    style={{marginVertical: 14}}
                >

                    <FlatList
                        data={rooms}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToOffsets={[...Array(rooms.length)].map(
                            (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40
                        )}
                        snapToAlignment={'start'}
                        decelerationRate="normal"

                        renderItem={
                            ({ item }) => 
                                <ScrollView
                                    style={{
                                        backgroundColor: '#fefefe', 
                                        padding: 20,
                                        minHeight: width / 2.6,
                                        maxHeight: width / 1.1,
                                        width: width * 0.8 - 20,
                                        marginHorizontal: 10,
                                        marginVertical: 10,
                                        paddingBottom: 40,
                                        borderRadius: 12,

                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 5
                                    }}
                                >

                                    <Text
                                        style={{fontWeight: 'bold'}}
                                    >{item.name}</Text>
                                    
                                    {(item.rooms).map((room, i) => (
                                        <View
                                            style={{
                                                marginTop: 8,
                                                marginBottom: 22
                                            }}
                                            key={i}
                                        >
                                            <Text>{(room.type == 'Espaço Comum' ? '' : (room.type) + ' ')}{room.name}</Text>
                                            <Text>Capacidade: {room.capacity}</Text>
                                            <Text>Pessoas presentes no ambiente: {room.movements.length}</Text>
                        
                                            <Text 
                                                style={{
                                                    color: percentageColorText(occupationPercentage(room.movements.length, room.capacity))
                                                }}
                                            >
                                                Porcentagem de ocupação: {occupationPercentage(room.movements.length, room.capacity)}%
                                            </Text>
                        
                                        </View>
                                    ))}
                                </ScrollView>
                        }

                        keyExtractor={item => item.id}
                    />

                </View>

                <RefreshBtn
                    onPress={onRefresh}
                />

            </View>

        </Container>
    );
}
