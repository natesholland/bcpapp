/**
 * For the SubTitles
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Spacer from './Spacer';

const SubTitle = ({children}) => {
  return (
    <>
      <Text style={styles.text}>{children}</Text>
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SubTitle;
