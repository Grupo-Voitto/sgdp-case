import React, {PropsWithChildren} from 'react';

import {StyleSheet, View, ViewStyle} from 'react-native';

interface BoxProps extends PropsWithChildren {
  bgColor?: string;
  padding?: number;
  borderRadius?: number;
  style?: ViewStyle;
}

export default function Box(props: BoxProps) {
  const boxStyles: ViewStyle = {
    backgroundColor: props?.bgColor || '#21222D',
    padding: props?.padding || 8,
    borderRadius: props?.borderRadius || 12,
  };

  const customBoxStyle = StyleSheet.flatten([boxStyles, props?.style]);

  return <View style={customBoxStyle}>{props?.children}</View>;
}
