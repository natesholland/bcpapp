/**
 * For the SubTitles
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Spacer from './Spacer';

const Title = ({children}) => {
  return (
    <>
      <Text style={styles.text}>{children}</Text>
      <Spacer />
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Title;
