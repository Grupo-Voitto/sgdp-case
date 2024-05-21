import React from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface ScrollViewProps extends RNScrollViewProps {
  rowGap?: number;
}

export default function ScrollView(props: ScrollViewProps) {
  const customContentContainerStyle: ViewStyle = StyleSheet.flatten([
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
