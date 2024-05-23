import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type KnownProjectAreaID = 'ti' | 'marketing' | 'rh' | 'comercial';

const renderIconByProjectAreaID = ({
  projectAreaID,
  size = 24,
  color = '#FFF',
}: {
  projectAreaID: KnownProjectAreaID | string;
  size?: number;
  color?: string;
}) => {
  switch (projectAreaID) {
    case 'ti': {
      return <Ionicons name="analytics" size={size} color={color} />;
    }
    case 'comercial': {
      return <Ionicons name="card" size={size} color={color} />;
    }
    case 'marketing': {
      return <Ionicons name="images" size={size} color={color} />;
    }
    case 'rh': {
      return <Ionicons name="people" size={size} color={color} />;
    }
    default: {
      return <Ionicons name="help" size={size} color={color} />;
    }
  }
};

interface ProjectAreaIconProps {
  projectAreaID: KnownProjectAreaID | string;
  size?: number;
  color?: string;
}

export default function ProjectAreaIcon(props: ProjectAreaIconProps) {
  return renderIconByProjectAreaID(props);
}
