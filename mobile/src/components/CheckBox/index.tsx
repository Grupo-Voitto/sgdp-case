import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from '../Text';
import {styles} from './styles';

interface CheckBoxProps {
  checked?: boolean;
  text?: string;
  color?: string;
  onPress?: () => void;
}

export default function CheckBox({
  checked = false,
  text,
  color = '#FFF',
  onPress,
}: CheckBoxProps) {
  const checkboxStyle = StyleSheet.flatten([
    styles.checkbox,
    {borderColor: color},
  ]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View style={checkboxStyle}>
        {checked && <Ionicons name="checkmark-sharp" size={12} color={color} />}
      </View>
      {text && (
        <Text style={StyleSheet.flatten([styles.text, {color}])}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
