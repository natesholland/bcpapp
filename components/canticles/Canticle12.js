import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle12 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>12</Bold>
        {'    '}
        <Bold>A Song of Creation</Bold>
        {'    '}
        <Italic>Benedicite, omnia opera Domini</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Song of the Three Young Men, 35-65 </SmallItalic>
      </BcpText>

      <SmallItalic>
        One or more sections of this Canticle may be used. Whatever the
        selection, it begins with the Invocation and concludes with the
        Doxology.
      </SmallItalic>

      <Spacer />

      <BcpText>
        <Italic>Invocation </Italic>
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, all you works of the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever. {'\n'}
        In the firmament of his power, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        <Italic>I{'    '}The Cosmic Order</Italic>{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, you angels and all powers of the Lord, * {'\n'}
        {'    '}O heavens and all waters above the heavens. {'\n'}
        Sun and moon and stars of the sky, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, every shower of rain and fall of dew, * {'\n'}
        {'    '}all winds and fire and heat. {'\n'}
        Winter and Summer, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, O chill and cold, * {'\n'}
        drops of dew and flakes of snow. {'\n'}
        Frost and cold, ice and sleet, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, O nights and days, * {'\n'}
        {'    '}O shining light and enfolding dark. {'\n'}
        Storm clouds and thunderbolts, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        <Italic>II{'    '}The Earth and its Creatures</Italic>
      </BcpText>
      <Spacer />

      <BcpText>
        Let the earth glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever. {'\n'}
        Glorify the Lord, O mountains and hills, {'\n'}
        and all that grows upon the earth, * {'\n'}
        {'    '}praise him and highly exalt him for ever.
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, O springs of water, seas, and streams, * {'\n'}
        {'    '}O whales and all that move in the waters. {'\n'}
        All birds of the air, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, O beasts of the wild, * {'\n'}
        {'    '}and all you flocks and herds. {'\n'}O men and women everywhere,
        glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        <Italic>III{'    '}The People of God</Italic>
      </BcpText>
      <Spacer />

      <BcpText>
        Let the people of God glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever. {'\n'}
        Glorify the Lord, O priests and servants of the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        Glorify the Lord, O spirits and souls of the righteous, * {'\n'}
        {'    '}praise him and highly exalt him for ever. {'\n'}
        You that are holy and humble of heart, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
      </BcpText>
      <Spacer />

      <BcpText>
        <Italic>Doxology</Italic>
      </BcpText>
      <Spacer />

      <BcpText>
        Let us glorify the Lord: Father, Son, and Holy Spirit; * {'\n'}
        {'    '}praise him and highly exalt him for ever. {'\n'}
        In the firmament of his power, glorify the Lord, * {'\n'}
        {'    '}praise him and highly exalt him for ever.{' '}
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

export default Canticle12;
