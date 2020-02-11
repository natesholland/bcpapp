/**
 * My header
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = ({navigator, name}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>This is your profile {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
  },
});

export default Profile;
