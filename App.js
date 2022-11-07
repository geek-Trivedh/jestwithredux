import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Counter from './src/screens/Counter/Counter';
import Cats from './src/screens/Cats/Cats';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.lighter,
  };
  const container = {flex: 1, justifyContent: 'center', alignItems: 'center'};

  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle, container]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <Counter /> */}
        <Cats />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
