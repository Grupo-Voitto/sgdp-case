import React from 'react';
import {
  Text as RNText,
  StyleSheet,
} from 'react-native';

export default function Text(props) {
  const customStyle = StyleSheet.flatten([props?.style, {fontFamily: 'Inter'}]);

  return <RNText {...props} style={customStyle} />;
}
