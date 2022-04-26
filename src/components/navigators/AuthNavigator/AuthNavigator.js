import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthHomeScreen from '../../screens/AuthHomeScreen/AuthHomeScreen';
import AuthLoginScreen from '../../screens/AuthLoginScreen/AuthLoginScreen';
import AuthForgotPasswordScreen from '../../screens/AuthForgotPasswordScreen/AuthForgotPasswordScreen';
import AuthRegisterScreen from '../../screens/AuthRegisterScreen/AuthRegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      <Stack.Screen name="AuthLogin" component={AuthLoginScreen} />
      <Stack.Screen
        name="AuthForgotPassword"
        component={AuthForgotPasswordScreen}
      />
      <Stack.Screen name="AuthRegister" component={AuthRegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
