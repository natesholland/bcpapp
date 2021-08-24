import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle9 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>9</Bold>
        {'    '}
        <Bold>The First Song of Isaiah</Bold>
        {'    '}
        <Italic>Ecce, Deus</Italic> {'\n'}
        {'       '}
        {'  '}
        <SmallItalic>Isaiah 12:2-6</SmallItalic>
      </BcpText>

      <BcpText>
        Surely, it is God who saves me; *{'\n'}
        {'    '}I will trust in him and not be afraid. {'\n'}
        For the Lord is my stronghold and my sure defense, * {'\n'}
        {'    '}and he will be my Savior. {'\n'}
        Therefore you shall draw water with rejoicing * {'\n'}
        {'    '}from the springs of salvation. {'\n'}
        And on that day you shall say, * {'\n'}
        {'    '}Give thanks to the Lord and call upon his Name; {'\n'}
        Make his deeds known among the peoples; * {'\n'}
        {'    '}see that they remember that his Name is exalted. {'\n'}
        Sing the praises of the Lord, for he has done great things, * {'\n'}
        {'    '}and this is known in all the world. {'\n'}
        Cry aloud, inhabitants of Zion, ring out your joy, * {'\n'}
        {'    '}for the great one in the midst of you is the Holy One of Israel.{' '}
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

export default Canticle9;
