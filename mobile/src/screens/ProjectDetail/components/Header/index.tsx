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
  onChangeStatus?: (status: ProjectStatus) => void;
}

export default function Header({
  progressInPercent = 10,
  projectAreaColor = '#CCC',
  status = ProjectStatus.IN_PROGRESS,
  onChangeStatus = () => {},
}: HeaderProps) {
  const handleChangeStatus = (newStatus: ProjectStatus) => {
    if (status === newStatus) {
      onChangeStatus(ProjectStatus.IN_PROGRESS);
      return;
    }

    onChangeStatus(newStatus);
  };

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
          onPress={() => handleChangeStatus(ProjectStatus.FINISHED)}
        />
        <CheckBox
          checked={status === ProjectStatus.FROZEN}
          text="Congelar"
          onPress={() => handleChangeStatus(ProjectStatus.FROZEN)}
        />
      </View>
    </Box>
  );
}
