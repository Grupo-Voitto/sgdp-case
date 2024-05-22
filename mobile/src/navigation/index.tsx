import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'src/screens/Home';
import Projects from 'src/screens/Projects';
import ProjectDetail from 'src/screens/ProjectDetail';
import Members from 'src/screens/Members';

const MainDrawerNavigator = createDrawerNavigator();
const MainStackNavigator = createNativeStackNavigator();

function MainDrawer() {
  return (
    <MainDrawerNavigator.Navigator screenOptions={{headerShown: false}}>
      <MainDrawerNavigator.Screen name="Home" component={Home} />
      <MainDrawerNavigator.Screen name="Projects" component={Projects} />
      <MainDrawerNavigator.Screen name="Members" component={Members} />
    </MainDrawerNavigator.Navigator>
  );
}

function MainStack() {
  return (
    <MainStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MainStackNavigator.Screen name="MainDrawer" component={MainDrawer} />
      <MainStackNavigator.Screen
        name="ProjectDetail"
        component={ProjectDetail}
      />
    </MainStackNavigator.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
