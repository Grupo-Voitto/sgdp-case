import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

interface TextProps extends RNTextProps {}

export default function Text(props: TextProps) {
  const customStyle = StyleSheet.flatten([props?.style, {fontFamily: 'Inter'}]);

  return <RNText {...props} style={customStyle} />;
}
