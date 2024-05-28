import React from 'react';
import {TextInput, View} from 'react-native';

import Text from '../Text';
import {styles} from './styles';

export default function Input({label = '', ...props}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#D0D5DD"
          {...props}
          style={styles.input}
        />
      </View>
    </View>
  );
}
