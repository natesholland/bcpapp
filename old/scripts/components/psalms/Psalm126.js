import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import SmallBcpText from '../shared/SmallBcpText';
import SmallItalic from '../shared/SmallItalic';
import PsalmHeader from './PsalmHeader';

const Psalm126 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 126" annotation="In convertendo" />

        <BcpText>
          <SmallBcpText>1</SmallBcpText>{' '}
          <BcpText>
            When the L<SmallItalic>ORD</SmallItalic> restored the fortunes of
            Zion, *{'\n'}
            {'    '}then were we like those who dream.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>2</SmallBcpText>{' '}
          <BcpText>
            Then was our mouth filled with laughter, *{'\n'}
            {'    '}and our tongue with shouts of joy.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>3</SmallBcpText>{' '}
          <BcpText>
            Then they said among the nations, *{'\n'}
            {'    '}"The L<SmallItalic>ORD</SmallItalic> has done great things
            for them."
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>4</SmallBcpText>{' '}
          <BcpText>
            The L<SmallItalic>ORD</SmallItalic> has done great things for us, *
            {'\n'}
            {'    '}and we are glad indeed.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>5</SmallBcpText>{' '}
          <BcpText>
            Restore our fortunes, O L<SmallItalic>ORD</SmallItalic>, *{'\n'}
            {'    '}like the watercourses of the Negev.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>6</SmallBcpText>{' '}
          <BcpText>
            Those who sowed with tears *{'\n'}
            {'    '}will reap with songs of joy.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>7</SmallBcpText>{' '}
          <BcpText>
            Those who go out weeping, carrying the seed, *{'\n'}
            {'    '}will come again with joy, shouldering their sheaves.
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

export default Psalm126;
