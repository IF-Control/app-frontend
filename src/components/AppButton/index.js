import React from 'react';
import { ButtonPrimary, TextButtonPrimary} from './styles';

export default function AppButton(props){
    return (
        <ButtonPrimary 
            backgroundColor={props.backgroundColor} 
            accessibilityLabel={props.accessibilityLabel}
            onPress={props.onPress}
        >

            <TextButtonPrimary>
                {props.text}
            </TextButtonPrimary>

        </ButtonPrimary>
    );
}