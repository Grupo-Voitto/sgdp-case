import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import ProjectDetail from './screens/ProjectDetail';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#171821" animated barStyle="light-content" />
      <ProjectDetail />
    </SafeAreaProvider>
  );
}
