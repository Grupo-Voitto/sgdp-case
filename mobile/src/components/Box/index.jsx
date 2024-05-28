import React from 'react';

import {StyleSheet, View, ViewStyle} from 'react-native';

export default function Box(props) {
  const boxStyles = {
    backgroundColor: props?.bgColor || '#21222D',
    padding: typeof props?.padding === 'number' ? props.padding : 8,
    borderRadius: props?.borderRadius || 12,
    gap: props?.gap || 0,
    marginTop: props?.marginTop || 0,
  };

  const customBoxStyle = StyleSheet.flatten([boxStyles, props?.style]);

  return <View style={customBoxStyle}>{props?.children}</View>;
}
