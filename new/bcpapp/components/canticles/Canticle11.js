import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle11 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>11</Bold>
        {'    '}
        <Bold>The Third Song of Isaiah</Bold>
        {'    '}
        <Italic>Surge, illuminare</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Isaiah 60:1-3, 11a, 14c, 18-19</SmallItalic>{' '}
      </BcpText>

      <BcpText>
        Arise, shine, for your light has come, * {'\n'}
        {'    '}and the glory of the Lord has dawned upon you.{'\n'}
        For behold, darkness covers the land; * {'\n'}
        {'    '}deep gloom enshrouds the peoples. {'\n'}
        But over you the Lord will rise, * {'\n'}
        {'    '}and his glory will appear upon you. {'\n'}
        Nations will stream to your light, * {'\n'}
        {'    '}and kings to the brightness of your dawning. {'\n'}
        Your gates will always be open; * {'\n'}
        {'    '}by day or night they will never be shut. {'\n'}
        They will call you, The City of the Lord, * {'\n'}
        {'    '}The Zion of the Holy One of Israel. {'\n'}
        Violence will no more be heard in your land, * {'\n'}
        {'    '}ruin or destruction within your borders. {'\n'}
        You will call your walls, Salvation, * {'\n'}
        {'    '}and all your portals, Praise. {'\n'}
        The sun will no more be your light by day; * {'\n'}
        {'    '}by night you will not need the brightness of the moon. {'\n'}
        The Lord will be your everlasting light, * {'\n'}
        {'    '}and your God will be your glory.{' '}
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

export default Canticle11;
