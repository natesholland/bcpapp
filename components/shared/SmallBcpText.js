/**
 * Base class for Text
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SmallBcpText = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
  },
});

export default SmallBcpText;
