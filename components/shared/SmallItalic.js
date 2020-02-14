/**
 * For the Italics
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SmallItalic = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    fontSize: 13,
  },
});

export default SmallItalic;
