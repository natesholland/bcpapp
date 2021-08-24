import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle16 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>16</Bold>
        {'    '}
        <Bold>The Song of Zechariah</Bold>
        {'    '}
        <Italic>Benedictus Dominus Deus</Italic>
        {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Luke 1: 68-79 </SmallItalic>
      </BcpText>
      <Spacer />

      <BcpText>
        Blessed be the Lord, the God of Israel; * {'\n'}
        {'    '}he has come to his people and set them free. {'\n'}
        He has raised up for us a mighty savior, * {'\n'}
        {'    '}born of the house of his servant David. {'\n'}
        Through his holy prophets he promised of old, {'\n'}
        that he would save us from our enemies, * {'\n'}
        {'    '}from the hands of all who hate us. {'\n'}
        He promised to show mercy to our fathers * {'\n'}
        {'    '}and to remember his holy covenant. {'\n'}
        This was the oath he swore to our father Abraham, * {'\n'}
        {'    '}to set us free from the hands of our enemies, {'\n'}
        Free to worship him without fear, * {'\n'}
        {'    '}holy and righteous in his sight {'\n'}
        {'    '}all the days of our life.{'\n'}
        You, my child, shall be called the prophet of the Most High, * {'\n'}
        {'    '}for you will go before the Lord to prepare his way, {'\n'}
        To give his people knowledge of salvation * {'\n'}
        {'    '}by the forgiveness of their sins. {'\n'}
        In the tender compassion of our God * {'\n'}
        {'    '}the dawn from on high shall break upon us, {'\n'}
        To shine on those who dwell in darkness and the {'\n'}
        {'       '}
        {'       '}
        {'       '}
        {'       '} shadow of death, * {'\n'}
        {'    '}and to guide our feet into the way of peace.{' '}
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

export default Canticle16;
