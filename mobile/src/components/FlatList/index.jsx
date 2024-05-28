import React from 'react';
import {
  FlatList as RNFlatList,
} from 'react-native';

export default function FlatList(props) {
  return (
    <RNFlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
}
