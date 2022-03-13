import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigator} from './main.navigator';
import {AuthNavigator} from './auth.navigator';

const Stack = createStackNavigator();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
});
