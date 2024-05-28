import React, {useState} from 'react';
import {View} from 'react-native';

import Box from 'src/components/Box';
import {styles} from './styles';
import Text from 'src/components/Text';
import {ProjectMember} from 'src/types';
import FlatList from 'src/components/FlatList';
import HorizontalDivider from 'src/components/HorizontalDivider';
import Button from 'src/components/Button';
import CreateMemberModal from '../CreateMemberModal';

function MemberItem({name, role}) {
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

export default function MembersList({
  members = [],
  onCreateNewMember = () => {},
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setIsModalVisible(prev => !prev);
  };

  const handleCreateNewMember = () => {
    onCreateNewMember();

    toggleModalVisibility();
  };

  return (
    <Box padding={16}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Lista de membros</Text>
          <Button onPress={toggleModalVisibility}>Novo</Button>
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
      <CreateMemberModal
        visible={isModalVisible}
        onClose={toggleModalVisibility}
        onSubmit={handleCreateNewMember}
      />
    </Box>
  );
}
