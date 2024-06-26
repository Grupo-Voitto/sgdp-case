import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import Text from '../Text';

export default function Button({
  variant = 'primary',
  mainColor = '#A9DFD8',
  minorColor = '#21222D',
  onPress = () => {},
  children,
}) {
  const customContainerStyle = {
    backgroundColor: variant === 'primary' ? mainColor : 'transparent',
    borderWidth: variant === 'secondary' ? 1 : 0,
    borderColor: variant === 'secondary' ? mainColor : 'transparent',
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const customTextStyle = {
    fontSize: 16,
    fontWeight: 500,
    color: variant === 'primary' ? minorColor : mainColor,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={customContainerStyle}
      onPress={onPress}>
      <Text style={customTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
