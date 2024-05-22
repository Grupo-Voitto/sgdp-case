import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainDrawer from './MainDrawer';

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}
