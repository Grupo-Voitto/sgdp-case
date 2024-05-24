import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';
import {ProjectInfo} from 'src/types';
import ProjectAreaIcon from 'src/components/ProjectAreaIcon';

interface DeliveryCardProps {
  expiresIn?: string;
  projectAreaColor?: string;
  projectInfo?: ProjectInfo;
}

export default function DeliveryCard(props: DeliveryCardProps) {
  return (
    <Box padding={16}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <ProjectAreaIcon
            projectAreaID={props?.projectInfo?.area?.id}
            color={props?.projectInfo?.area.color}
            size={28}
          />
          <Text style={styles.projectName}>{props?.projectInfo?.name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="warning" size={28} color="#FFF" />
            </View>
            <Text style={styles.text}>{'Data de\nentrega: '}</Text>
          </View>
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
