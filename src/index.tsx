import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationNavigator} from './navigators/application.navigator';
import 'react-native-gesture-handler';

function AppComponent() {
  return (
    <NavigationContainer>
      <ApplicationNavigator />
    </NavigationContainer>
  );
}

export function App() {
  return <AppComponent />;
}
