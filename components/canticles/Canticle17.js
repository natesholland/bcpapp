import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle17 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>17</Bold>
        {'    '}
        <Bold>The Song of Simeon</Bold>
        {'    '}
        <Italic>Nunc Dimittis</Italic>
        {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Luke 2:29-32 </SmallItalic>
      </BcpText>

      <BcpText>
        Lord, you now have set your servant free * {'\n'}
        {'    '}to go in peace as you have promised; {'\n'}
        For these eyes of mine have seen the Savior, * {'\n'}
        {'    '}whom you have prepared for all the world to see: {'\n'}A Light
        to enlighten the nations, * {'\n'}
        {'    '}and the glory of your people Israel.{' '}
      </BcpText>

      <BcpText>
        Glory to the Father, and to the Son, and to the Holy Spirit: as it was
        in the beginning, is now, and will be for ever. Amen.{' '}
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

export default Canticle17;
