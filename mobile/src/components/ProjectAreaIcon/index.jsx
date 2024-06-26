import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const renderIconByProjectAreaID = ({
  projectAreaID,
  size = 24,
  color = '#FFF',
}) => {
  switch (`${projectAreaID}`) {
    case 'ti':
    case '1': {
      return <Ionicons name="analytics" size={size} color={color} />;
    }
    case 'comercial':
    case '4': {
      return <Ionicons name="card" size={size} color={color} />;
    }
    case 'marketing':
    case '2': {
      return <Ionicons name="images" size={size} color={color} />;
    }
    case 'rh':
    case '3': {
      return <Ionicons name="people" size={size} color={color} />;
    }
    default: {
      return <Ionicons name="help" size={size} color={color} />;
    }
  }
};

export default function ProjectAreaIcon(props) {
  return renderIconByProjectAreaID(props);
}
