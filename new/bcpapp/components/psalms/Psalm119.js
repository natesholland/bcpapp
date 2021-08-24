import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

import BcpText from '../shared/BcpText';
import SmallBcpText from '../shared/SmallBcpText';
import PsalmHeader from './PsalmHeader';
import Spacer from '../shared/Spacer';

const Psalm119 = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 119" annotation="Lucerna pedibus meis" />
        <BcpText>
          <SmallBcpText>105</SmallBcpText>{' '}
          <BcpText>
            Your word is a lantern to my feet *{'\n'}
            {'    '}and a light upon my path.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>106</SmallBcpText>{' '}
          <BcpText>
            I have sworn and am determined *{'\n'}
            {'    '}to keep your righteous judgments.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>107</SmallBcpText>{' '}
          <BcpText>
            I am deeply troubled; *{'\n'}
            {'    '}preserve my life, O L<SmallBcpText>ORD</SmallBcpText>,
            according to your word.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>108</SmallBcpText>{' '}
          <BcpText>
            Accept, O L<SmallBcpText>ORD</SmallBcpText>, the willing tribute of
            my lips, *{'\n'}
            {'    '}and teach me your judgments.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>109</SmallBcpText>{' '}
          <BcpText>
            My life is always in my hand, *{'\n'}
            {'    '}yet I do not forget your law.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>110</SmallBcpText>{' '}
          <BcpText>
            The wicked have set a trap for me, *{'\n'}
            {'    '}but I have not strayed from your commandments.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>111</SmallBcpText>{' '}
          <BcpText>
            Your decrees are my inheritance for ever; *{'\n'}
            {'    '}truly, they are the joy of my heart.
          </BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallBcpText>112</SmallBcpText>{' '}
          <BcpText>
            I have applied my heart to fulfill your statutes *{'\n'}
            {'    '}for ever and to the end.
          </BcpText>
        </BcpText>
        <Spacer />
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

export default Psalm119;
