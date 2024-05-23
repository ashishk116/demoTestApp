import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Login from './src/screens/Login';
import AppStack from './src/routes/home';
import {store} from './src/store/index';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <NativeBaseProvider>
          <NavigationContainer>
            <AppStack/>
          </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
    </Provider>
  );
}

