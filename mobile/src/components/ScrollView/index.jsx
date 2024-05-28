import React from 'react';
import {
  ScrollView as RNScrollView,
  StyleSheet,
} from 'react-native';

export default function ScrollView(props) {
  const customContentContainerStyle = StyleSheet.flatten([
    props?.contentContainerStyle,
    {rowGap: props?.rowGap || 0},
  ]);

  return (
    <RNScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
      contentContainerStyle={customContentContainerStyle}
    />
  );
}
