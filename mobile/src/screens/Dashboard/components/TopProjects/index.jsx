import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import Text from 'src/components/Text';
import Box from 'src/components/Box';
import {hexColorWithOpacity} from 'src/utils/colors';

export default function TopProjects({projects = []}) {
  const navigation = useNavigation();

  const handleProjectPress = (projectID) => {
    navigation.navigate('ProjectDetail', {projectID});
  };

  return (
    <Box padding={16}>
      <Text style={styles.title}>Top Projetos</Text>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={[styles.headerText, styles.orderCell]}>#</Text>
          <Text style={[styles.headerText, styles.expandableCell]}>Nome</Text>
          <Text style={[styles.headerText, styles.progressCell]}>%</Text>
        </View>
        {projects.map((project, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={project.id}
              style={styles.rowContainer}
              onPress={() => handleProjectPress(project.id)}>
              <Text style={[styles.orderText, styles.orderCell]}>
                {`${index + 1}`.padStart(2, '0')}
              </Text>
              <Text style={[styles.nameText, styles.expandableCell]}>
                {project.name}
              </Text>
              <View
                style={[
                  styles.progressContainer,
                  {
                    borderColor: project.area.color,
                    backgroundColor: hexColorWithOpacity(
                      project.area.color,
                      12,
                    ),
                  },
                ]}>
                <Text
                  style={[
                    styles.progressText,
                    styles.progressCell,
                    {color: project.area.color},
                  ]}>{`${project.progressInPercent}%`}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Box>
  );
}
