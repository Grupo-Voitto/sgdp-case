import React from 'react';
import {View, ViewStyle} from 'react-native';

interface HorizontalDividerProps {
  stroke?: number;
  bgColor?: string;
  marginTop?: number;
  marginBottom?: number;
}

export default function HorizontalDivider(props: HorizontalDividerProps) {
  const customStyles: ViewStyle = {
    height: props?.stroke || 1,
    backgroundColor: props?.bgColor || '#FFF',
    marginTop: props?.marginTop || 0,
    marginBottom: props?.marginBottom || 0,
  };

  return <View style={customStyles} />;
}
