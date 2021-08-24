/**
 * The Lords Prayer
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';

import BcpText from './BcpText';

const LordsPrayer = () => {
  return (
    <BcpText>
      {/* TODO I would really like to make this respond to screen size and look better */}
      Our Father, who art in heaven,{'\n'}
      {'   '} hallowed be thy Name, {'\n'}
      {'   '} thy kingdom come, {'\n'}
      {'   '} thy will be done, {'\n'}
      {'   '} {'   '} on earth as it is in heaven. {'\n'}
      Give us this day our daily bread. {'\n'}
      And forgive us our trespasses, {'\n'}
      {'   '} as we forgive those {'\n'}
      {'   '} {'   '} who trespass against us. {'\n'}
      And lead us not into temptation, {'\n'}
      {'   '} but deliver us from evil. {'\n'}
      For thine is the kingdom, {'\n'}
      {'   '} and the power, and the glory, {'\n'}
      {'   '} for ever and ever. Amen.{'\n'}
      {'\n'}
      Our Father in heaven, {'\n'}
      {'   '} hallowed be your Name, {'\n'}
      {'   '} your kingdom come, {'\n'}
      {'   '} your will be done, {'\n'}
      {'   '} {'   '} on earth as in heaven. {'\n'}
      Give us today our daily bread. {'\n'}
      Forgive us our sins {'\n'}
      {'   '} as we forgive those {'\n'}
      {'   '} {'   '} who sin against us. {'\n'}
      Save us from the time of trial, {'\n'}
      {'   '} and deliver us from evil. {'\n'}
      For the kingdom, the power, {'\n'}
      {'   '} and the glory are yours, {'\n'}
      {'   '} now and for ever. Amen.
    </BcpText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    fontSize: 15,
  },
});

export default LordsPrayer;
