import React from 'react';
import {View} from 'react-native';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';

const DUMMY_DATA = [
  [30, 60],
  [20, 80],
  [30, 60],
  [30, 60],
  [30, 60],
  [30, 60],
];

export default function ProjectsActivityChart({
  data = DUMMY_DATA,
  barColors = ['#A9DFD8', '#2B2B36'],
  legends = ['Ativos', 'Total'],
}) {
  return (
    <Box padding={16}>
      <Text style={styles.title}>Atividade</Text>
      <View style={styles.container}>
        <View style={styles.barsContainer}>
          {data.map(([innerData, outerData], index) => {
            const outerBarHeight = outerData + 100;
            const innerBarHeight = (innerData / outerData) * outerBarHeight;

            return (
              <View
                key={index}
                style={[
                  styles.outerBar,
                  {height: outerBarHeight, backgroundColor: barColors[1]},
                ]}>
                <View
                  style={[
                    styles.innerBar,
                    {height: innerBarHeight, backgroundColor: barColors[0]},
                  ]}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.legendsContainer}>
          {legends.map((legend, index) => {
            return (
              <React.Fragment key={legend}>
                {index > 0 && <View style={styles.legendDivider} />}
                <View style={styles.legendContainer}>
                  <View style={styles.legendContentContainer}>
                    <View
                      style={[
                        styles.legendDot,
                        {backgroundColor: barColors[index]},
                      ]}
                    />
                    <Text style={styles.legendLabel}>{legend}</Text>
                  </View>
                </View>
              </React.Fragment>
            );
          })}
        </View>
      </View>
    </Box>
  );
}
