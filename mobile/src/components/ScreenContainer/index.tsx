import React, {PropsWithChildren} from 'react';
import {Image, Pressable, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {DrawerNavigationProp} from '@react-navigation/drawer';

import {styles} from './styles';
import Box from '../Box';
import {useNavigation} from '@react-navigation/native';

interface ScreenContainerProps extends PropsWithChildren {}

export default function ScreenContainer(props: ScreenContainerProps) {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const customStyles: ViewStyle = {
    padding: 20,
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={[styles.container, customStyles]}>
        <Box padding={12} style={styles.logoContainer}>
          <Pressable onPress={navigation.toggleDrawer}>
            <Ionicons name="menu" size={32} color="#FFF" />
          </Pressable>
          <Image
            style={styles.logo}
            source={require('src/assets/logos/construprime_logo.png')}
          />
        </Box>
        {props?.children}
      </View>
    </SafeAreaView>
  );
}
