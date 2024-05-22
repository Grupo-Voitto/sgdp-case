import React from 'react';
import Box from '../Box';
import {Pressable, View} from 'react-native';
import {projectStyles, styles} from './styles';
import {Project} from 'src/types';
import Text from 'src/components/Text';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface SummaryProjectsCardProps {
  title: string;
  createdAt?: string;
  projects: Project[];
}

export default function SummaryProjectsCard({
  title = 'Titulo',
  createdAt = '10/10/2023',
  projects = [],
}: SummaryProjectsCardProps) {
  const navigation = useNavigation();

  const handleProjectPress = ({projectID}: {projectID: Project['id']}) => {
    navigation.navigate('ProjectDetail', {projectID});
  }

  return (
    <Box padding={16}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{createdAt}</Text>
      </View>
      <View style={styles.projectsContainer}>
        {projects?.map(project => {
          return (
            <Pressable
              key={project.id}
              style={projectStyles.container}
              onPress={() => handleProjectPress({projectID: project.id})}>
              <View style={projectStyles.leftContainer}>
                <Text style={projectStyles.areaName}>{project.area.name}</Text>
                <Text style={projectStyles.name}>{project.name}</Text>
              </View>
              <Text
                style={[
                  projectStyles.progress,
                  {color: project?.area?.color || '#FFF'},
                ]}>
                {`+${project.progressInPercent}% concluído`}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </Box>
  );
}
