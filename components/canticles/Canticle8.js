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
        <Bold>8</Bold>
        {'    '}
        <Bold>The Song of Moses</Bold>
        {'    '}
        <Italic>Cantemus Domino</Italic> {'\n'}
        {'       '}
        {'  '}
        <SmallItalic>Exodus 15:1-6, 11-13, 17-18 </SmallItalic>
      </BcpText>

      <SmallItalic>Especially suitable for use in Easter Season</SmallItalic>

      <BcpText>
        I will sing to the Lord, for he is lofty and uplifted; * {'\n'}
        {'    '}the horse and its rider has he hurled into the sea. {'\n'}
        The Lord is my strength and my refuge; * {'\n'}
        {'    '}the Lord has become my Savior. {'\n'}
        This is my God and I will praise him, * {'\n'}
        {'    '}the God of my people and I will exalt him. {'\n'}
        The Lord is a mighty warrior; * {'\n'}
        {'    '}Yahweh is his Name. {'\n'}
        The chariots of Pharaoh and his army has he hurled into the sea; *{' '}
        {'\n'}
        {'    '}the finest of those who bear armor have been {'\n'}
        {'       '}
        {'       '}
        {'       '}
        {'       '} drowned in the Red Sea. {'\n'}
        The fathomless deep has overwhelmed them; * {'\n'}
        {'    '}they sank into the depths like a stone. {'\n'}
        Your right hand, O Lord, is glorious in might; * {'\n'}
        {'    '}your right hand, O Lord, has overthrown the enemy. {'\n'}
        Who can be compared with you, O Lord, among the gods? * {'\n'}
        {'    '}who is like you, glorious in holiness, {'\n'}
        {'    '}awesome in renown, and worker of wonders? {'\n'}
        You stretched forth your right hand; * {'\n'}
        {'    '}the earth swallowed them up. {'\n'}
        With your constant love you led the people you redeemed; * {'\n'}
        {'    '}with your might you brought them in safety to {'\n'}
        {'       '}
        {'       '}
        {'       '}
        {'       '} your holy dwelling. {'\n'}
        You will bring them in and plant them * {'\n'}
        {'    '}on the mount of your possession, {'\n'}
        The resting-place you have made for yourself, O Lord, * {'\n'}
        {'    '}the sanctuary, O Lord, that your hand has established. {'\n'}
        The Lord shall reign * {'\n'}
        {'    '}for ever and for ever.
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
