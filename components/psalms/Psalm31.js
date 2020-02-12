import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm31 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 31" annotation="In te, Domine, speravi" />
        <BcpText>
          1 In you, O LORD, have I taken refuge; let me never be put to shame: *
          deliver me in your righteousness. 2 Incline your ear to me; * make
          haste to deliver me. 3 Be my strong rock, a castle to keep me safe,
          for you are my crag and my stronghold; * for the sake of your Name,
          lead me and guide me. 4 Take me out of the net that they have secretly
          set for me, * for you are my tower of strength. 5 Into your hands I
          commend my spirit, * for you have redeemed me, O LORD, O God of truth.
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

export default Psalm31;
