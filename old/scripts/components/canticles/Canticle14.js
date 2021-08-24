import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle14 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        <Bold>14</Bold>
        {'    '}
        <Bold>A Song of Penitence</Bold>
        {'    '}
        <Italic>Kyrie Pantokrator</Italic> {'\n'}
        {'       '}
        {'   '}
        <SmallItalic>Prayer of Manasseh 1-2, 4, 6-7, 11-15 </SmallItalic>
      </BcpText>
      <Spacer />

      <SmallItalic>
        Especially suitable in Lent, and on other penitential occasions{' '}
      </SmallItalic>
      <Spacer />

      <BcpText>
        O Lord and Ruler of the hosts of heaven, * {'\n'}
        {'    '}God of Abraham, Isaac, and Jacob, {'\n'}
        {'    '}and of all their righteous offspring: {'\n'}
        You made the heavens and the earth, * {'\n'}
        {'    '}with all their vast array. {'\n'}
        All things quake with fear at your presence; * {'\n'}
        {'    '}they tremble because of your power. {'\n'}
        But your merciful promise is beyond all measure; * {'\n'}
        {'    '}it surpasses all that our minds can fathom. {'\n'}O Lord, you
        are full of compassion, * {'\n'}
        {'    '}long-suffering, and abounding in mercy. {'\n'}
        You hold back your hand; * {'\n'}
        {'    '}you do not punish as we deserve. {'\n'}
        In your great goodness, Lord, {'\n'}
        you have promised forgiveness to sinners, * {'\n'}
        {'    '}that they may repent of their sin and be saved. {'\n'}
        And now, O Lord, I bend the knee of my heart, * {'\n'}
        {'    '}and make my appeal, sure of your gracious goodness. {'\n'}I have
        sinned, O Lord, I have sinned, * {'\n'}
        {'    '}and I know my wickedness only too well. {'\n'}
        Therefore I make this prayer to you: * {'\n'}
        {'    '}Forgive me, Lord, forgive me. {'\n'}
        Do not let me perish in my sin, * {'\n'}
        {'    '}nor condemn me to the depths of the earth. {'\n'}
        For you, O Lord, are the God of those who repent, * {'\n'}
        {'    '}and in me you will show forth your goodness. {'\n'}
        Unworthy as I am, you will save me, {'\n'}
        in accordance with your great mercy, * {'\n'}
        {'    '}and I will praise you without ceasing all the days of my life.{' '}
        {'\n'}
        For all the powers of heaven sing your praises, * {'\n'}
        {'    '}and yours is the glory to ages of ages. Amen.
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

export default Canticle14;
