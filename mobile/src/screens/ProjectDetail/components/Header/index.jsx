import React from 'react';
import {View} from 'react-native';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';
import CheckBox from 'src/components/CheckBox';
import {clampNumber} from 'src/utils';

export default function Header({
  progressInPercent = 10,
  projectAreaColor = '#CCC',
  status = 1,
  onChangeStatus = () => {},
}) {
  const handleChangeStatus = (newStatus) => {
    if (status === newStatus) {
      onChangeStatus(1);
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
          checked={status === 3}
          text="Concluir"
          color={projectAreaColor}
          onPress={() => handleChangeStatus(3)}
        />
        <CheckBox
          checked={status === 1}
          text="Congelar"
          onPress={() => handleChangeStatus()}
        />
      </View>
    </Box>
  );
}
