import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from './Tab-Navi';
import Screens from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Details" component={Screens.Details.Details} />
      <Stack.Screen name="ShowLocation" component={Screens.Map.Show} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default Navigator;
