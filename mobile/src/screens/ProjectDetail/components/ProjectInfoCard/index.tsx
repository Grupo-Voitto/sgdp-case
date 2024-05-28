import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from 'src/components/Box';
import {styles, taskStyles} from './styles';
import Text from 'src/components/Text';
import {ProjectInfo, ProjectMember, ProjectTask} from 'src/types';
import Button from 'src/components/Button';

interface ProjectInfoCardProps {
  projectInfo?: ProjectInfo;
  members?: ProjectMember[];
  tasks?: ProjectTask[];
  onChangeTaskStatus?: ({
    taskID,
    done,
  }: {
    taskID: string | number;
    done: boolean;
  }) => void;
}

export default function ProjectInfoCard({
  onChangeTaskStatus = () => {},
  ...props
}: ProjectInfoCardProps) {
  const completedTasks = props?.tasks?.filter(task => task.done).length;
  const tasksLength = props?.tasks?.length;

  const sortedTasks = props?.tasks?.sort((prev, current) => {
    return current.done ? -1 : 1;
  });

  const handleCreateNewTask = () => {
    console.log('Implemtentar lógica para criar tarefas');
  };

  return (
    <Box padding={16}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Descrição:</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.editDescriptionButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          {props?.projectInfo?.description}
        </Text>
        <View style={styles.membersContainer}>
          <Text style={styles.title}>Time: </Text>
          {props?.members?.map(member => {
            return (
              <View
                style={[
                  styles.memberChip,
                  {backgroundColor: props?.projectInfo?.area?.color},
                ]}
                key={member.id}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Pressable style={styles.memberIcon}>
                  <Ionicons name="close-outline" size={24} color="#000" />
                </Pressable>
              </View>
            );
          })}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.addMemberButton,
              {borderColor: props?.projectInfo?.area?.color},
            ]}>
            <Text style={styles.addMemberButtonText}>adicionar membro</Text>
          </TouchableOpacity>
        </View>
        <View style={taskStyles.container}>
          <View style={taskStyles.topContainer}>
            <View style={taskStyles.titleContainer}>
              <Text style={taskStyles.title}>Tarefas criadas</Text>
              <View style={[taskStyles.titleChip, taskStyles.titleChipRounded]}>
                <Text style={taskStyles.titleChipText}>{tasksLength}</Text>
              </View>
            </View>
            <View style={taskStyles.titleContainer}>
              <Text
                style={[
                  taskStyles.title,
                  {color: props?.projectInfo?.area?.color},
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
            {sortedTasks?.map(task => {
              const checkedStyles = StyleSheet.flatten([
                taskStyles.taskChecked,
                {backgroundColor: props?.projectInfo?.area?.color},
              ]);

              const unCheckedStyles = StyleSheet.flatten([
                taskStyles.taskUnchecked,
                {borderColor: props?.projectInfo?.area?.color},
              ]);

              const checkStyles = task.done ? checkedStyles : unCheckedStyles;

              return (
                <View key={task.id} style={taskStyles.taskContainer}>
                  <View style={taskStyles.taskLeftContainer}>
                    <Pressable
                      style={checkStyles}
                      onPress={() =>
                        onChangeTaskStatus({
                          taskID: task.id,
                          done: !task.done,
                        })
                      }>
                      {task.done && (
                        <Ionicons name="checkmark" size={12} color="#FFF" />
                      )}
                    </Pressable>
                    <Text
                      style={[
                        taskStyles.taskText,
                        task.done ? taskStyles.taskCompletedText : {},
                      ]}>
                      {task.description}
                    </Text>
                  </View>
                  <Pressable style={taskStyles.deleteIconContainer}>
                    <Ionicons name="trash" size={20} color="#808080" />
                  </Pressable>
                </View>
              );
            })}
          </View>
          <Box marginTop={24}>
            <Button
              mainColor={props.projectInfo?.area?.color}
              onPress={handleCreateNewTask}>
              Criar nova tarefa
            </Button>
          </Box>
        </View>
      </View>
    </Box>
  );
}
