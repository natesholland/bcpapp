import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle15 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>15</Bold>
        {'    '}
        <Bold>The Song of Mary</Bold>
        {'    '}
        <Italic>Magnificat</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Luke 1:46-55 </SmallItalic>
      </BcpText>
      <Spacer />

      <BcpText>
        My soul proclaims the greatness of the Lord, {'\n'}
        my spirit rejoices in God my Savior; * {'\n'}
        {'    '}for he has looked with favor on his lowly servant. {'\n'}
        From this day all generations will call me blessed: * {'\n'}
        {'    '}the Almighty has done great things for me, {'\n'}
        {'    '}and holy is his Name. {'\n'}
        He has mercy on those who fear him * {'\n'}
        {'    '}in every generation. {'\n'}
        He has shown the strength of his arm, * {'\n'}
        {'    '}he has scattered the proud in their conceit. {'\n'}
        He has cast down the mighty from their thrones, *{'\n'}
        {'    '}and has lifted up the lowly. {'\n'}
        He has filled the hungry with good things, * {'\n'}
        {'    '}and the rich he has sent away empty. {'\n'}
        He has come to the help of his servant Israel, * {'\n'}
        {'    '}for he has remembered his promise of mercy, {'\n'}
        The promise he made to our fathers, * {'\n'}
        {'    '}to Abraham and his children for ever.{' '}
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

export default Canticle15;
