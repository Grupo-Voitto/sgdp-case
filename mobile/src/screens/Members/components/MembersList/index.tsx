import React from 'react';
import {View} from 'react-native';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';
import {ProjectMember} from 'src/types';
import FlatList from 'src/components/FlatList';
import HorizontalDivider from 'src/components/HorizontalDivider';
import Button from 'src/components/Button';

interface MemberItemProps extends ProjectMember {}

function MemberItem({name, role}: MemberItemProps) {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>{role}</Text>
      </View>
    </View>
  );
}

const MemberItemDivider = () => (
  <HorizontalDivider stroke={1} marginBottom={12} marginTop={12} />
);

const DUMMY_MEMBERS: ProjectMember[] = [
  {
    id: 'renata',
    name: 'Renata Weber',
    role: 'Gerente de Projeto',
  },
  {
    id: 'diego',
    name: 'Diego Miguel',
    role: 'Desenvolvedor',
  },
  {
    id: 'henrico',
    name: 'Henrico Piubello',
    role: 'Desenvolvedor',
  },
  {
    id: 'marcelo',
    name: 'Marcelo Alvarenga',
    role: 'Designer',
  },
];

interface MembersListProps {
  members?: ProjectMember[];
}

export default function MembersList({
  members = DUMMY_MEMBERS,
}: MembersListProps) {
  return (
    <Box padding={16}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Lista de membros</Text>
          <Button>Novo</Button>
        </View>
        <View style={styles.rowsContainer}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Nome</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Cargo</Text>
            </View>
          </View>
          <HorizontalDivider stroke={1} marginBottom={12} marginTop={12} />
          <FlatList
            data={members}
            renderItem={({item}) => <MemberItem {...item} />}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={MemberItemDivider}
          />
        </View>
      </View>
    </Box>
  );
}