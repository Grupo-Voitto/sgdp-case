import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';

interface DeliveryCardProps {
  expiresIn: string;
  projectAreaColor: string;
}

export default function DeliveryCard(props: DeliveryCardProps) {
  return (
    <Box padding={16}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="warning" size={28} color="#FFF" />
          </View>
          <Text style={styles.text}>Data de entrega: </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text
            style={[
              styles.dateText,
              {color: props?.projectAreaColor || '#FFF'},
            ]}>
            {props?.expiresIn}
          </Text>
        </View>
      </View>
    </Box>
  );
}
