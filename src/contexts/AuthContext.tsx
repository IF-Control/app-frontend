import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IfControlService } from "../services/IfControlService";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: Boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    setNewUserProfileData: (NewUserDataProps) => Promise<void>;
    signOut: () => Promise<void>;
    directSignOut: () => Promise<void>;
    hasError: boolean;
}

type UserProps = {
    id: string;
    name: string;
    firstName: string;
    email: string;
    enrollment: string;
    type: string;
    course: string;
    vaccine_doses: number | string;
    group_of_risk: boolean | string;
    token: string;
}

type NewUserDataProps = {
    name: string;
    firstName: string;
    course: string;
    vaccine_doses: number | string;
    group_of_risk: boolean | string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        firstName: '',
        email: '',
        enrollment: '',
        type: '',
        course: '',
        vaccine_doses: '',
        group_of_risk: '',
        token: ''
    });

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const isAuthenticated = !!user.id;

    useEffect(() => {
        async function getUser(){
            const userInfo = await AsyncStorage.getItem('@ifspcovidcontrol');
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            if(Object.keys(hasUser).length > 0){
                IfControlService.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                const userName = (hasUser.name).split(" ");

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    firstName: userName[0],
                    email: hasUser.email,
                    enrollment: hasUser.enrollment,
                    type: hasUser.type,
                    course: hasUser.course,
                    vaccine_doses: hasUser.vaccine_doses,
                    group_of_risk: hasUser.group_of_risk,
                    token: hasUser.type
                })
            }

            setLoading(false);
        }

        getUser();
    });

    async function setNewUserProfileData({ name, firstName, vaccine_doses, group_of_risk, course }: NewUserDataProps){
        const userInfo = await AsyncStorage.getItem('@ifspcovidcontrol');
        let hasUser: UserProps = JSON.parse(userInfo || '{}');
        
        const usuario = {
            id: hasUser.id,
            name: name,
            firstName: firstName,
            email: hasUser.email,
            enrollment: hasUser.enrollment,
            type: hasUser.type,
            course: course,
            vaccine_doses: vaccine_doses,
            group_of_risk: group_of_risk,
            token: hasUser.token
        };

        setUser(usuario);
        await AsyncStorage.setItem('@ifspcovidcontrol', JSON.stringify(usuario));
    }

    async function signIn({ email, password }: SignInProps){
        setLoadingAuth(true);
        setHasError(false);

        try{
            const response = await IfControlService.post('/session', {
                email,
                password
            });

            const { id, name, type, token, enrollment, course, vaccine_doses, group_of_risk } = response.data;

            const data = {
                ...response.data
            };

            await AsyncStorage.setItem('@ifspcovidcontrol', JSON.stringify(data));

            IfControlService.defaults.headers.common['Authorization'] = `Bearer ${token}`

            const userName = (name).split(" ");
            const firstName = userName[0];

            setUser({
                id,
                name,
                firstName,
                email,
                enrollment,
                type,
                course,
                vaccine_doses,
                group_of_risk,
                token
            });

            setLoadingAuth(false);
        }catch(err){
            setHasError(true);
            setLoadingAuth(false);
        }
    }

    async function signOut(){
        Alert.alert('Sair', 'Tem certeza que deseja sair do aplicativo?', [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            { 
                text: 'Sim',
                onPress: () => directSignOut()
            }
        ]);
    }

    async function directSignOut(){
        await AsyncStorage.clear().then(() => {
            setUser({
                id: '',
                name: '',
                firstName: '',
                email: '',
                enrollment: '',
                type: '',
                course: '',
                vaccine_doses: '',
                group_of_risk: '',
                token: ''
            });
        });
    }
    
    return (
        <AuthContext.Provider 
            value={{ 
                user, 
                isAuthenticated, 
                signIn, 
                loading, 
                loadingAuth,
                setNewUserProfileData, 
                signOut, 
                directSignOut,
                hasError
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}