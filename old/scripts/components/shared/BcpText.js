/**
 * Base class for Text
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BcpText = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

export default BcpText;
