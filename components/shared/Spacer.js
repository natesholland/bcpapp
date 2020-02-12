/**
 * Base class for Text
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Spacer = () => {
  return <Text style={styles.text} />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

export default Spacer;
