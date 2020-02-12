/**
 * When the people say something
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Spacer from './Spacer';
import Italic from './Italic';

const People = ({children}) => {
  return (
    <>
      <Text>
        <Italic>People {'    '}</Italic>
        <Text>{children}</Text>
      </Text>
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    fontSize: 15,
  },
});

export default People;
