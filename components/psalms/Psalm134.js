import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm134 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 134" annotation="Qui habitat" />
        <BcpText>
          1 Behold now, bless the LORD, all you servants of the LORD, * you that
          stand by night in the house of the LORD. 2 Lift up your hands in the
          holy place and bless the LORD; * the LORD who made heaven and earth
          bless you out of Zion.
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

export default Psalm134;
