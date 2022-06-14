import React from 'react';
import { ButtonRefresh } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function RefreshBtn(props){
    return (
        <ButtonRefresh
            onPress={props.onPress}
        >
            <AntDesign name="reload1" size={26} color='#fafafa' />
        </ButtonRefresh>
    );
}