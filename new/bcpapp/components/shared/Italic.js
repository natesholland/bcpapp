/**
 * For the Italics
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Italic = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    fontSize: 15,
  },
});

export default Italic;
