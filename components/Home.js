/**
 * My
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, Button} from 'react-native';
import DailyReadings from './shared/DailyReadings';
import BcpText from './shared/BcpText';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Let's do Compline"
        onPress={() => navigation.navigate('Compline')}
      />
      <Button
        style={styles.button}
        title="Let's do Evening Prayer"
        onPress={() => navigation.navigate('EveningPrayerRite2')}
      />
      <DailyReadings />
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
