/**
 * When the Officiant says something
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

import SmallItalic from './SmallItalic';

const Officiant = ({children}) => {
  return (
    <>
      <Text>
        <SmallItalic>Officiant {'  '}</SmallItalic>
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

export default Officiant;
