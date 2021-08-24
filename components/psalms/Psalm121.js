import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import SmallBcpText from '../shared/SmallBcpText';
import PsalmHeader from './PsalmHeader';

const Psalm121 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 121" annotation="Levavi oculos" />
        <BcpText>
          <SmallBcpText>1</SmallBcpText>{' '}
          <BcpText>
            I lift up my eyes to the hills; *{'\n'}
            {'    '}from where is my help to come?
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>2</SmallBcpText>{' '}
          <BcpText>
            My help comes from the L<SmallBcpText>ORD</SmallBcpText>, *{'\n'}
            {'    '}the maker of heaven and earth.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>3</SmallBcpText>{' '}
          <BcpText>
            He will not let your foot be moved *{'\n'}
            {'    '}and he who watches over you will not fall asleep.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>4</SmallBcpText>{' '}
          <BcpText>
            Behold, he who keeps watch over Israel *{'\n'}
            {'    '}shall neither slumber nor sleep;
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>5</SmallBcpText>{' '}
          <BcpText>
            The L<SmallBcpText>ORD</SmallBcpText> himself watches over you; *
            {'\n'}
            {'    '}the L<SmallBcpText>ORD</SmallBcpText> is your shade at your
            right hand,
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>6</SmallBcpText>{' '}
          <BcpText>
            So that the sun shall not strike you by day, *{'\n'}
            {'    '}nor the moon by night.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>7</SmallBcpText>{' '}
          <BcpText>
            The L<SmallBcpText>ORD</SmallBcpText> shall preserve you from all
            evil; *{'\n'}
            {'    '}it is he who shall keep you safe.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>8</SmallBcpText>{' '}
          <BcpText>
            The L<SmallBcpText>ORD</SmallBcpText> shall watch over your going
            out and{'\n'}
            {'       '} your coming in, *{'\n'}
            {'    '}from this time forth for evermore.
          </BcpText>
        </BcpText>
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

export default Psalm121;
