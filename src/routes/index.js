import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){
    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading){
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5'
                }}
            >
                <ActivityIndicator size={60} color={"#2F9E41"} />
            </View>
        );
    }

    return(
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}