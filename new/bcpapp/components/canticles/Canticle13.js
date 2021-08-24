import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle13 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>13</Bold>
        {'    '}
        <Bold>A Song of Praise</Bold>
        {'    '}
        <Italic>Benedictus es, Domine</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Song of the Three Young Men, 29-34</SmallItalic>{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Glory to you, Lord God of our fathers; * {'\n'}
        {'    '}you are worthy of praise; glory to you. {'\n'}
        Glory to you for the radiance of your holy Name; * {'\n'}
        {'    '}we will praise you and highly exalt you for ever.
      </BcpText>
      <Spacer />

      <BcpText>
        Glory to you in the splendor of your temple; * {'\n'}
        {'    '}on the throne of your majesty, glory to you. {'\n'}
        Glory to you, seated between the Cherubim; * {'\n'}
        {'    '}we will praise you and highly exalt you for ever.
      </BcpText>
      <Spacer />

      <BcpText>
        Glory to you, beholding the depths; * {'\n'}
        {'    '}in the high vault of heaven, glory to you. {'\n'}
        Glory to you, Father, Son, and Holy Spirit; * {'\n'}
        {'    '}we will praise you and highly exalt you for ever.{'\n'}
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

export default Canticle13;
