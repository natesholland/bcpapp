/**
 * When the people say something
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Spacer from './Spacer';
import SmallItalic from './SmallItalic';

const People = ({children}) => {
  return (
    <>
      <Text>
        <SmallItalic>People {'    '}</SmallItalic>
        <Text>{children}</Text>
      </Text>
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
