import React from 'react';
import {View} from 'react-native';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';
import CheckBox from 'src/components/CheckBox';
import {clampNumber} from 'src/utils';
import {ProjectStatus} from 'src/types';

interface HeaderProps {
  progressInPercent?: number;
  projectAreaColor?: string;
  status: ProjectStatus;
}

export default function Header({
  progressInPercent = 10,
  projectAreaColor = '#CCC',
  status = ProjectStatus.IN_PROGRESS,
}: HeaderProps) {
  return (
    <Box padding={12}>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressInnerBar,
                {
                  width: `${clampNumber(0, progressInPercent, 100) || 0}%`,
                  backgroundColor: projectAreaColor,
                },
              ]}
            />
          </View>
          <Text
            style={[
              styles.progressText,
              {color: projectAreaColor},
            ]}>{`${progressInPercent}%`}</Text>
        </View>
        <CheckBox
          checked={status === ProjectStatus.FINISHED}
          text="Concluir"
          color={projectAreaColor}
        />
        <CheckBox checked={status === ProjectStatus.FROZEN} text="Congelar" />
      </View>
    </Box>
  );
}
