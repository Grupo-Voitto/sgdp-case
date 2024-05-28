import React, {useState, useCallback} from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import MembersList from './components/MembersList';
import {MembersAPI} from 'src/services/api';
import {ProjectMember} from 'src/types';
import {useFocusEffect} from '@react-navigation/native';

export default function Members() {
  const [members, setMembers] = useState();

  const getMembers = useCallback(async () => {
    const response = await MembersAPI.getMembers();

    setMembers(response);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getMembers();
    }, [getMembers]),
  );

  const normalizedMembers =
    members?.map(member => ({
      id: member.id,
      name: member.nome,
      role: member.funcao,
    })) || [];

  const handleCreateNewMember = () => {
    getMembers();
  };

  return (
    <ScreenContainer>
      <MembersList
        members={normalizedMembers}
        onCreateNewMember={handleCreateNewMember}
      />
    </ScreenContainer>
  );
}
