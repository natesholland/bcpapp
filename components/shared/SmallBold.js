/**
 * For the Bolds
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SmallBold = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default SmallBold;
