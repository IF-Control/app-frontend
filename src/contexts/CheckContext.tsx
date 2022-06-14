import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";
import { LogBox } from "react-native";

type CheckContextData = {
    checkItemStorage: () => Promise<void>;
}

type CheckProviderProps = {
    children: ReactNode;
}

export const CheckContext = createContext({} as CheckContextData);

export function CheckProvider({children}: CheckProviderProps){
    LogBox.ignoreAllLogs();

    async function checkItemStorage(){
        const movementCheck = await AsyncStorage.getItem('@ifcontrolmovementcheck');
        const userInfo = await AsyncStorage.getItem('@ifspcovidcontrol');

        if(movementCheck != null && userInfo != null){
            var actualDate = new Date().toLocaleString("pt-BR");
            const dateCheckOut = new Date(movementCheck["checkout_date"]).toLocaleString("pt-BR");
    
            if(actualDate > dateCheckOut){
                const movementCheckOut = JSON.parse(movementCheck);

                const response = await api.patch('/checkout', {
                    room_id: movementCheckOut.room_id,
                    movement_id: movementCheckOut.id,
                    confirm: true
                });
    
                await AsyncStorage.removeItem('@ifcontrolmovementcheck');
                alert('Check-Out realizado em '+ movementCheckOut["checkout_date"] +'  com sucesso!');
            }
        }
    }

    checkItemStorage();
    
    return (
        <CheckContext.Provider 
            value={{ 
                checkItemStorage
            }}
        >
            {children}
        </CheckContext.Provider>
    );
}