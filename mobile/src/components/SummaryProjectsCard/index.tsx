import React from 'react';
import Box from '../Box';
import {View} from 'react-native';
import {projectStyles, styles} from './styles';
import {Project} from 'src/types';
import Text from 'src/components/Text';

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
  return (
    <Box padding={16}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{createdAt}</Text>
      </View>
      <View style={styles.projectsContainer}>
        {projects?.map(project => {
          return (
            <View key={project.id} style={projectStyles.container}>
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
            </View>
          );
        })}
      </View>
    </Box>
  );
}
