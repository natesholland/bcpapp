import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle18 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        {'\n'}
        <Bold>18</Bold>
        {'    '}
        <Bold>A Song to the Lamb</Bold>
        {'    '}
        <Italic>Dignus es</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Revelation 4:11, 5:9-10, 13</SmallItalic>
      </BcpText>

      <BcpText>
        Splendor and honor and kingly power * {'\n'}
        {'    '}are yours by right, O Lord our God, {'\n'}
        For you created everything that is, * {'\n'}
        {'    '}and by your will they were created and have their being;{' '}
      </BcpText>
      <Spacer />


      <BcpText>
        And yours by right, O Lamb that was slain, * {'\n'}
        {'    '}for with your blood you have redeemed for God, {'\n'}
        From every family, language, people, and nation, * {'\n'}
        {'    '}a kingdom of priests to serve our God.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        And so, to him who sits upon the throne, * {'\n'}
        {'    '}and to Christ the Lamb, {'\n'}
        Be worship and praise, dominion and splendor, * {'\n'}
        {'    '}for ever and for evermore.{' '}
      </BcpText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Canticle18;
