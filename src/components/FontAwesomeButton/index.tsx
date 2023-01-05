import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text } from 'react-native';

export default function FontAwesomeButton(props){
    return (
        <View style={{flexDirection:"row"}}>
			<FontAwesome 
                onPress={props.onPress} 
                name={props.icon}
                size={28} 
                color={props.color} 
                style={{marginRight: 15}} 
                accessibilityLabel={props.accessibilityLabel}
            />
            <Text style={{
                fontSize: 18,
                paddingTop: 2
            }}>
                {props.text}
            </Text>
		</View>
    );
}