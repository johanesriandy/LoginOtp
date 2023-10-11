import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Register from './Register/Register.screen';
import Login from './Login/Login.screen';
import Welcome from './Welcome/Welcome.screen';
import Otp from './Otp/Otp.screen';
import { Dashboard } from './Dashboard/Dashboard.screen';

const Stack = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
  Login: undefined,
  Register: undefined,
  Welcome: undefined,
  Otp: { email: string, password: string };
  Dashboard: undefined,
};

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
          component={Otp}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
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
