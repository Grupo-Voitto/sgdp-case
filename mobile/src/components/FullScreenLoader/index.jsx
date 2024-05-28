import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from './styles';
import Text from '../Text';

export default function FullScreenLoader({text = ''}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#A9DFD8" size="large" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}
