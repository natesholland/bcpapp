/**
 * My
 */
import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import Compline from './components/Compline';

const Stack = createStackNavigator();

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Morning'},
    {id: '2', text: 'Noonday'},
    {id: '3', text: 'Evening'},
    {id: '4', text: 'Compline'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text: text}, ...prevItems];
      });
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Compline" component={Compline} />
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
