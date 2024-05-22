import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from 'src/screens/Home';
import Projects from 'src/screens/Projects';

const Navigator = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Navigator.Navigator>
      <Navigator.Screen name="Home" component={Home} />
      <Navigator.Screen name="Projects" component={Projects} />
    </Navigator.Navigator>
  );
}
