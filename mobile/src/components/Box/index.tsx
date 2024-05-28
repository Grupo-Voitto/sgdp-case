import React, {PropsWithChildren} from 'react';

import {StyleSheet, View, ViewStyle} from 'react-native';

interface BoxProps extends PropsWithChildren {
  bgColor?: string;
  padding?: number;
  borderRadius?: number;
  style?: ViewStyle;
  gap?: number;
  marginTop?: number;
}

export default function Box(props: BoxProps) {
  const boxStyles: ViewStyle = {
    backgroundColor: props?.bgColor || '#21222D',
    padding: typeof props?.padding === 'number' ? props.padding : 8,
    borderRadius: props?.borderRadius || 12,
    gap: props?.gap || 0,
    marginTop: props?.marginTop || 0,
  };

  const customBoxStyle = StyleSheet.flatten([boxStyles, props?.style]);

  return <View style={customBoxStyle}>{props?.children}</View>;
}
