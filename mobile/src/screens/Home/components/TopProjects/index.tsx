import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from 'src/components/Text';
import Box from 'src/components/Box';
import {Project} from 'src/types';
import {hexColorWithOpacity} from 'src/utils/colors';

const DUMMY_PROJECTS: Project[] = [
  {
    id: 'chatbot',
    name: 'ChatBot',
    area: {
      id: 'ti',
      name: 'TI',
      color: '#FCB859',
    },
    progressInPercent: 46,
  },
  {
    id: 'sales-flow',
    name: 'Fluxo de Vendas',
    area: {
      id: 'marketing',
      name: 'Marketing',
      color: '#A9DFD8',
    },
    progressInPercent: 17,
  },
  {
    id: 'turnover-off',
    name: 'Turnover OFF',
    area: {
      id: 'rh',
      name: 'RH',
      color: '#28AEF3',
    },
    progressInPercent: 19,
  },
  {
    id: 'cadence',
    name: 'Cadência',
    area: {
      id: 'comercial',
      name: 'Comercial',
      color: '#F2C8ED',
    },
    progressInPercent: 29,
  },
];

interface TopProjectsProps {
  projects?: Project[];
}

export default function TopProjects({
  projects = DUMMY_PROJECTS,
}: TopProjectsProps) {
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
            <View key={project.id} style={styles.rowContainer}>
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
            </View>
          );
        })}
      </View>
    </Box>
  );
}
