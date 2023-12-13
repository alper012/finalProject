import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from '../screens';
import Components from '../components';

const Bottom = createBottomTabNavigator();

const BtTabs = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          height: 60,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: 'red',
        },
      }}>
      <Bottom.Screen
        name="Home_Screen"
        component={Screens.List.List}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <Components.Libs.Image.Base
                source={require('../assets/images/home_icon.png')}
                style={{
                  container: {
                    bottom: -7,
                  },
                  image: {
                    width: 40,
                    height: 40,
                    tintColor: focused ? 'red' : 'pink',
                  },
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BtTabs;
