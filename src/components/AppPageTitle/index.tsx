import React from 'react';
import { TitleBox, Title, Line } from './styles';

export function AppPageTitle(props){
  return (
    <TitleBox>
        <Title>{props.name}</Title>
        <Line />
    </TitleBox>
  );
}
