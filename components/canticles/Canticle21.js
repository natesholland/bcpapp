import React from 'react';
import {StyleSheet, View} from 'react-native';

import BcpText from '../shared/BcpText';
import SmallItalic from '../shared/SmallItalic';
import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SmallBcpText from '../shared/SmallBcpText';
import Spacer from '../shared/Spacer';

const Canticle21 = ({navigator, name}) => {
  return (
    <View>
      <BcpText>
        {'\n'}
        <Bold>21</Bold>
        {'    '}
        <Bold>You are God</Bold>
        {'   '}
        <Italic>Te Deum laudamus</Italic>{' '}
      </BcpText>

      <BcpText>
        You are God: we praise you; {'\n'}
        You are the Lord; we acclaim you; {'\n'}
        You are the eternal Father: {'\n'}
        All creation worships you. {'\n'}
        To you all angels, all the powers of heaven, {'\n'}
        Cherubim and Seraphim, sing in endless praise: {'\n'}
        {'    '}Holy, holy, holy Lord, God of power and might,{'\n'}
        {'    '}heaven and earth are full of your glory. {'\n'}
        The glorious company of apostles praise you. {'\n'}
        The noble fellowship of prophets praise you. {'\n'}
        The white-robed army of martyrs praise you. {'\n'}
        Throughout the world the holy Church acclaims you; {'\n'}
        {'    '}Father, of majesty unbounded, {'\n'}
        {'    '}your true and only Son, worthy of all worship,{'\n'}
        {'    '}and the Holy Spirit, advocate and guide.{' '}
      </BcpText>

      <BcpText>
        You, Christ, are the king of glory, {'\n'}
        the eternal Son of the Father. {'\n'}
        When you became man to set us free {'\n'}
        you did not shun the Virgin's womb. {'\n'}
        You overcame the sting of death {'\n'}
        and opened the kingdom of heaven to all believers. {'\n'}
        You are seated at God's right hand in glory. {'\n'}
        We believe that you will come and be our judge. {'\n'}
        {'    '}Come then, Lord, and help your people, {'\n'}
        {'    '}bought with the price of your own blood, {'\n'}
        {'    '}and bring us with your saints {'\n'}
        {'    '}to glory everlasting.{' '}
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

export default Canticle21;
