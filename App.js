/**
 * My 
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Morning'},
    {id: '2', text: 'Noonday'},
    {id: '3', text: 'Evening'},
    {id: '4', text: 'Compline'},
  ]);

  return (
    <View style={styles.container}>
      <Header title={'BCP App'} />
      {/* <Text style={styles.text}> Hello Cassie you are beautiful</Text> */}
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item}/>}
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
