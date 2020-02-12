
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Italic from '../shared/Italic';
import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm4 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 4" annotation=" Cum invocarem" />
        <BcpText>
        1    Answer me when I call, O God, defender of my cause; *
         you set me free when I am hard-pressed;
         have mercy on me and hear my prayer.

2    "You mortals, how long will you dishonor my glory; *
         how long will you worship dumb idols
         and run after false gods?"

3    Know that the LORD does wonders for the faithful; *
         when I call upon the LORD, he will hear me.

4    Tremble, then, and do not sin; *
         speak to your heart in silence upon your bed.

5    Offer the appointed sacrifices *
         and put your trust in the LORD.

         6    Many are saying,
         "Oh, that we might see better times!" *
         Lift up the light of your countenance upon us, O LORD.

7    You have put gladness in my heart, *
         more than when grain and wine and oil increase.

8    I lie down in peace; at once I fall asleep; *
         for only you, LORD, make me dwell in safety.

        </BcpText>
        <BcpText />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Psalm4;
