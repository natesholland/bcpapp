import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle19 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        {'\n'}
        <Bold>19</Bold>
        {'    '}
        <Bold>The Song of the Redeemed</Bold>
        {'    '}
        <Italic>Magna et mirabilia</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Revelation 15:3-4 </SmallItalic>
      </BcpText>

      <BcpText>
        O ruler of the universe, Lord God, {'\n'}
        great deeds are they that you have done, * {'\n'}
        {'    '}surpassing human understanding. {'\n'}
        Your ways are ways of righteousness and truth, * {'\n'}O King of all the
        ages.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Who can fail to do you homage, Lord, {'\n'}
        and sing the praises of your Name? * {'\n'}
        {'    '}for you only are the Holy One. {'\n'}
        All nations will draw near and fall down before you, * {'\n'}
        {'    '}because your just and holy works have been revealed.
      </BcpText>
      <Spacer />

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

export default Canticle19;
