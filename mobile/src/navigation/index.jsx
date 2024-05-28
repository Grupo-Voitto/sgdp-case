import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from 'src/screens/Dashboard';
import Projects from 'src/screens/Projects';
import ProjectDetail from 'src/screens/ProjectDetail';
import Members from 'src/screens/Members';

const MainDrawerNavigator = createDrawerNavigator();
const MainStackNavigator = createNativeStackNavigator();

const drawerStyleConfig = {
  headerShown: false,
  drawerLabelStyle: {
    fontFamily: 'Inter',
    fontWeight: 600,
  },
  drawerActiveBackgroundColor: '#A9DFD8',
  drawerActiveTintColor: '#000',
  drawerInactiveTintColor: '#87888C',
  drawerStyle: {
    backgroundColor: '#171821',
    paddingTop: 32,
  },
};

const renderDrawerIcon = ({
  activeIconName,
  inactiveIconName,
  focused,
  color,
  size,
}) => {
  return (
    <Ionicons
      name={focused ? activeIconName : inactiveIconName}
      size={size}
      color={color}
    />
  );
};

function MainDrawer() {
  return (
    <MainDrawerNavigator.Navigator screenOptions={drawerStyleConfig}>
      <MainDrawerNavigator.Screen
        name="Dahsboard"
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: props =>
            renderDrawerIcon({
              ...props,
              activeIconName: 'home',
              inactiveIconName: 'home-outline',
            }),
        }}
        component={Dashboard}
      />
      <MainDrawerNavigator.Screen
        name="Members"
        options={{
          drawerLabel: 'Membros',
          drawerIcon: props =>
            renderDrawerIcon({
              ...props,
              activeIconName: 'person',
              inactiveIconName: 'person-outline',
            }),
        }}
        component={Members}
      />
      <MainDrawerNavigator.Screen
        name="Projects"
        options={{
          drawerLabel: 'Projetos',
          drawerIcon: props =>
            renderDrawerIcon({
              ...props,
              activeIconName: 'stats-chart',
              inactiveIconName: 'stats-chart-outline',
            }),
        }}
        component={Projects}
      />
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
