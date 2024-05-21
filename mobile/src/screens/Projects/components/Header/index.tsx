import React from 'react';
import { Image } from 'react-native';
import Box from 'src/components/Box';
import { styles } from './styles';

export default function Header() {
  return (
    <Box padding={12}>
      <Image
        style={styles.logo}
        source={require('src/assets/logos/construprime_logo.png')}
        resizeMode="contain"
      />
    </Box>
  );
}
