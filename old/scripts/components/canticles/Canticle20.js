import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle20 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>20</Bold>
        {'    '}
        <Bold>Glory to God</Bold>
        {'    '}
        <Italic>Gloria in excelsis</Italic>{' '}
      </BcpText>

      <BcpText>
        Glory to God in the highest, {'\n'}
        {'    '}and peace to his people on earth.{' '}
      </BcpText>

      <BcpText>
        Lord God, heavenly King, {'\n'}
        almighty God and Father,{'\n'}
        {'    '}we worship you, we give you thanks, {'\n'}
        {'    '}we praise you for your glory.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Lord Jesus Christ, only Son of the Father, {'\n'}
        Lord God, Lamb of God, {'\n'}
        you take away the sin of the world: {'\n'}
        {'    '}have mercy on us; {'\n'}
        you are seated at the right hand of the Father: {'\n'}
        {'    '}receive our prayer.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        For you alone are the Holy One, {'\n'}
        you alone are the Lord, {'\n'}
        you alone are the Most High,{'\n'}
        {'    '}Jesus Christ, {'\n'}
        {'    '}with the Holy Spirit, {'\n'}
        {'    '}in the glory of God the Father. Amen.
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

export default Canticle20;
