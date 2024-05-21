import React, {PropsWithChildren} from 'react';

import {View, ViewStyle} from 'react-native';

interface BoxProps extends PropsWithChildren {
  bgColor?: string;
  padding?: number;
  borderRadius?: number;
}

export default function Box(props: BoxProps) {
  const boxStyles: ViewStyle = {
    backgroundColor: props?.bgColor || '#21222D',
    padding: props?.padding || 8,
    borderRadius: props?.borderRadius || 12,
  };

  return <View style={boxStyles}>{props?.children}</View>;
}
