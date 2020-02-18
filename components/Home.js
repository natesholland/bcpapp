/**
 * My
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Order of Evening Worship"
        onPress={() => navigation.navigate('OrderOfEveningWorship')}
      />
      <Button
        style={styles.button}
        title="Evening Prayer"
        onPress={() => navigation.navigate('EveningPrayerRite2')}
      />
      <Button
        style={styles.button}
        title="Compline"
        onPress={() => navigation.navigate('Compline')}
      />
      <Button
        style={styles.button}
        title="Daily Devotions"
        onPress={() => navigation.navigate('DailyDevotion')}
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
