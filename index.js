
import { AppRegistry, StatusBar, SafeAreaView } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux';
import { Store } from './src/redux/configureStore';



const Root = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <Provider store={Store}>
            <StatusBar hidden />
            <App />
            <FlashMessage position="top" />
        </Provider>
    </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
