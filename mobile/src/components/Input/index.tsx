import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import Text from '../Text';
import {styles} from './styles';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
}

export default function Input({label = '', ...props}: InputProps) {
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
