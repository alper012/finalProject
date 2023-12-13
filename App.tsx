import React, {useEffect} from 'react';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
