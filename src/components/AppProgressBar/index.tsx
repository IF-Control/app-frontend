import React from 'react';
import { ProgressBar } from 'react-native-paper';

const AppProgressBar = (props) => (
  <ProgressBar progress={props.progress} color={props.color} style={{width: '90%'}} />
);

export default AppProgressBar;