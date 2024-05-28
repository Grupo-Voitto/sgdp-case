import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import Box from '../Box';
import {useNavigation} from '@react-navigation/native';

export default function ScreenContainer(props) {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const customStyles = {
    padding: 20,
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={[styles.container, customStyles]}>
        <Box padding={12} style={styles.logoContainer}>
          <Pressable
            onPress={
              props?.shouldGoBack ? navigation.goBack : navigation.toggleDrawer
            }>
            <Ionicons
              name={props?.shouldGoBack ? 'arrow-back' : 'menu'}
              size={32}
              color="#FFF"
            />
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
