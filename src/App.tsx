/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Register from './Register/Register.screen';
import OtpInput from './OtpInput/OtpInput.screen';
import Login from './Login/Login.screen';
import Welcome from './Welcome/Welcome.screen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Otp"
          component={OtpInput}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
