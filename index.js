
import { AppRegistry, StatusBar, SafeAreaView } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message";




const Root = () => (
    <SafeAreaView style={{ flex: 1 }}>

        <StatusBar hidden />
        <App />
        <FlashMessage position="top" />

    </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
