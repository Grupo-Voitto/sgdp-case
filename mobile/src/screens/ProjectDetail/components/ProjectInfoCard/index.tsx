import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from 'src/components/Box';
import {styles, taskStyles} from './styles';
import Text from 'src/components/Text';
import {ProjectInfo} from 'src/types';

interface ProjectInfoCardProps {
  projectInfo: ProjectInfo;
}

export default function ProjectInfoCard(props: ProjectInfoCardProps) {
  const completedTasks = props.projectInfo.tasks.filter(
    task => task.done,
  ).length;
  const tasksLength = props.projectInfo.tasks.length;

  return (
    <Box padding={16}>
      <View style={styles.container}>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.description}>{props.projectInfo.description}</Text>
        <View style={styles.membersContainer}>
          <Text style={styles.title}>Time: </Text>
          {props.projectInfo.members.map(member => {
            return (
              <View
                style={[
                  styles.memberChip,
                  {backgroundColor: props.projectInfo.area.color},
                ]}
                key={member.id}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Pressable style={styles.memberIcon}>
                  <Ionicons name="close" size={28} color="#000" />
                </Pressable>
              </View>
            );
          })}
        </View>
        <View style={taskStyles.container}>
          <View style={taskStyles.topContainer}>
            <View style={taskStyles.titleContainer}>
              <Text style={taskStyles.title}>Tarefas criadas</Text>
              <View style={[taskStyles.titleChip, taskStyles.titleChipRounded]}>
                <Text style={taskStyles.titleChipText}>{completedTasks}</Text>
              </View>
            </View>
            <View style={taskStyles.titleContainer}>
              <Text
                style={[
                  taskStyles.title,
                  {color: props.projectInfo.area.color},
                ]}>
                Concluídas
              </Text>
              <View style={taskStyles.titleChip}>
                <Text
                  style={
                    taskStyles.titleChipText
                  }>{`${completedTasks} de ${tasksLength}`}</Text>
              </View>
            </View>
          </View>
          <View style={taskStyles.tasksContainer}>
            {props.projectInfo.tasks.map(task => {
              const checkedStyles = StyleSheet.flatten([
                taskStyles.taskChecked,
                {backgroundColor: props.projectInfo.area.color},
              ]);

              const unCheckedStyles = StyleSheet.flatten([
                taskStyles.taskUnchecked,
                {borderColor: props.projectInfo.area.color},
              ]);

              const checkStyles = task.done ? checkedStyles : unCheckedStyles;

              return (
                <View key={task.id} style={taskStyles.taskContainer}>
                  <Pressable style={checkStyles}>
                    {task.done && (
                      <Ionicons name="checkmark" size={12} color="#FFF" />
                    )}
                  </Pressable>
                  <Text style={taskStyles.taskText}>{task.description}</Text>
                  <Pressable style={taskStyles.deleteIconContainer}>
                    <Ionicons name="trash" size={28} color="#808080s" />
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Box>
  );
}
