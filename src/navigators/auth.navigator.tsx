import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginScreen} from '../screens/LoginScreen';
import {Styles} from './style';

type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
export const AuthNavigator = memo(function AuthNavigator() {
  return (
    <SafeAreaView style={Styles.navigatorContainer} edges={['bottom']}>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
});
