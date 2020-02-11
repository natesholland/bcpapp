/**
 * My profile
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';

import Italic from './shared/Italic';

const Compline = ({navigator, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Italic>The Officiant begins</Italic>
        <Text />

        <Text>
          The Lord Almighty grant us a peaceful night and a perfect end.{' '}
          <Italic>Amen.</Italic>
        </Text>
        <Text />

        <Text>
          <Italic>Officiant {'  '}</Italic>
          <Text>Our help is in the Name of the Lord;</Text>
        </Text>

        <Text>
          <Italic>People {'     '}</Italic>
          <Text>The maker of heaven and earth.</Text>
        </Text>
        <Text />

        <Italic>The Officiant may then say</Italic>
        <Text />

        <Text>Let us confess our sins to God.</Text>
        <Text />

        <Italic>Silence may be kept.</Italic>
        <Text />

        <Italic>Officiant and People</Italic>
        <Text />

        <Text>Almighty God, our heavenly Father:</Text>
        <Text>We have sinned against you,</Text>
        <Text>through our own fault,</Text>
        <Text>in thought, and word, and deed,</Text>
        <Text>and in what we have left undone.</Text>
        <Text>For the sake of your Son our Lord Jesus Christ,</Text>
        <Text>forgive us all our offenses;</Text>
        <Text>and grant that we may serve you</Text>
        <Text>in newness of life,</Text>
        <Text>to the glory of your Name. Amen.</Text>
        <Text />

        <Italic>Officiant</Italic>
        <Text />

        <Text>
          May the Almighty God grant us forgiveness of all our sins and the
          comfort of the Holy Spirit. <Italic>Amen.</Italic>
        </Text>
        <Text />

        <Italic>The Officiant then says</Italic>
        <Text />

        {/* This is really sloppy spacing. Figure out how to do this better. */}
        <Text>{'                '} O God, make speed to save us.</Text>
        <Text>
          <Italic>People</Italic> {'   '} O Lord, make haste to help us.
        </Text>
        <Text />

        <Italic>Officiant and People</Italic>
        <Text />

        <Text>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. <Italic>Amen.</Italic>
        </Text>
        <Text />

        <Text>
          <Italic>Except in Lent, add </Italic> {'   '} Alleluia.
        </Text>
        <Text />

        <Italic>
          One or more of the following Psalms are sung or said. Other suitable
          selections may be substituted.
        </Italic>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 23,
    padding: 10,
  },
});

export default Compline;
