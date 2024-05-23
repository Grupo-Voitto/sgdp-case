import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from 'react-native';

interface FlatListProps<T> extends RNFlatListProps<T> {}

export default function FlatList<T>(props: FlatListProps<T>) {
  return (
    <RNFlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
}
