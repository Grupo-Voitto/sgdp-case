import React, {useEffect, useState} from 'react';

import ScreenContainer from 'src/components/ScreenContainer';
import MembersList from './components/MembersList';
import {MembersAPI} from 'src/services/api';
import {ProjectMember} from 'src/types';

export default function Members() {
  const [members, setMembers] = useState<
    MembersAPI.GetMembersResponse | undefined
  >();

  useEffect(() => {
    const getMembers = async () => {
      const response = await MembersAPI.getMembers();

      setMembers(response);
    };

    getMembers();
  }, []);

  const normalizedMembers: ProjectMember[] =
    members?.map(member => ({
      id: member.id,
      name: member.nome,
      role: member.funcao,
    })) || [];

  return (
    <ScreenContainer>
      <MembersList members={normalizedMembers} />
    </ScreenContainer>
  );
}
