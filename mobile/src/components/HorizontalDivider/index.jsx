import React from 'react';
import {View} from 'react-native';

export default function HorizontalDivider(props) {
  const customStyles = {
    height: props?.stroke || 1,
    backgroundColor: props?.bgColor || '#FFF',
    marginTop: props?.marginTop || 0,
    marginBottom: props?.marginBottom || 0,
  };

  return <View style={customStyles} />;
}
