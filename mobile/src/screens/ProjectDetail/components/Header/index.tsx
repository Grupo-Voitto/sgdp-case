import React from 'react';
import {View} from 'react-native';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';

interface HeaderProps {
  progressInPercent: number;
  projectAreaColor: string;
}

export default function Header({
  progressInPercent = 10,
  projectAreaColor = '#CCC',
}: HeaderProps) {
  return (
    <Box padding={12}>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <Text
            style={[
              styles.progressText,
              {color: projectAreaColor},
            ]}>{`+${progressInPercent}% concluído`}</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressInnerBar,
                {
                  width: `${progressInPercent || 0}%`,
                  backgroundColor: projectAreaColor,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </Box>
  );
}
