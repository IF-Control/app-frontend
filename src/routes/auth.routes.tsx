import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Initial } from "../screens/Initial";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Terms } from "../screens/Terms";

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Initial" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Initial" component={Initial} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Terms" component={Terms} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}