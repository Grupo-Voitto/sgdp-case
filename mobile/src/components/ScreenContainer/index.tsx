import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenContainerProps extends PropsWithChildren {}

export default function ScreenContainer(props: ScreenContainerProps) {
  const customStyles: ViewStyle = {
    padding: 20,
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={[styles.container, customStyles]}>{props?.children}</View>
    </SafeAreaView>
  );
}
