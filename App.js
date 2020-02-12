/**
 * My
 */
import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import Compline from './components/Compline';
import Psalm4 from './components/psalms/Psalm4';
import Psalm31 from './components/psalms/Psalm31';
import Psalm91 from './components/psalms/Psalm91';
import Psalm134 from './components/psalms/Psalm134';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Compline" component={Compline} />
        <Stack.Screen name="Psalm 4" component={Psalm4} />
        <Stack.Screen name="Psalm 31" component={Psalm31} />
        <Stack.Screen name="Psalm 91" component={Psalm91} />
        <Stack.Screen name="Psalm 134" component={Psalm134} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    fontSize: 20,
  },
});

export default App;
