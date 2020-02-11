/**
 * My
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

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
    <View style={styles.container}>
      <Header title={'BCP App'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
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
