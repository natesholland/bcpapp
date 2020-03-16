import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle8 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>10</Bold>
        {'    '}
        <Bold>The Second Song of Isaiah</Bold>
        {'       '} <Italic>Quaerite Dominum</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Isaiah 55:6-11</SmallItalic>{' '}
      </BcpText>

      <BcpText>
        Seek the Lord while he wills to be found; * {'\n'}
        {'    '}call upon him when he draws near. {'\n'}
        Let the wicked forsake their ways * {'\n'}
        {'    '}and the evil ones their thoughts; {'\n'}
        And let them turn to the Lord, and he will have compassion, * {'\n'}
        {'    '}and to our God, for he will richly pardon. {'\n'}
        For my thoughts are not your thoughts, * {'\n'}
        {'    '}nor your ways my ways, says the Lord. {'\n'}
        For as the heavens are higher than the earth, * {'\n'}
        {'    '}so are my ways higher than your ways, {'\n'}
        {'    '}and my thoughts than your thoughts.{' '}
      </BcpText>

      <BcpText>
        For as rain and snow fall from the heavens * {'\n'}
        {'    '}and return not again, but water the earth, {'\n'}
        Bringing forth life and giving growth, * {'\n'}
        {'    '}seed for sowing and bread for eating, {'\n'}
        So is my word that goes forth from my mouth; * {'\n'}
        {'    '}it will not return to me empty; {'\n'}
        But it will accomplish that which I have purposed, * {'\n'}
        {'    '}and prosper in that for which I sent it.{' '}
      </BcpText>

      <Spacer />

      <BcpText>
        Glory to the Father, and to the Son, and to the Holy Spirit: as it was
        in the beginning, is now, and will be for ever. Amen.
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

export default Canticle8;
