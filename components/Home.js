/**
 * My
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, Button} from 'react-native';

import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';

const Home = ({navigation}) => {
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
      {/* <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      /> */}

      <Button
        style={styles.button}
        title="Let's do Compline"
        onPress={() => navigation.navigate('Compline', {name: 'Jane'})}
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
  button: {
    flex: 1,
    padding: 10,
    marginBottom: 50,
  },
});

export default Home;
