/**
 * My profile
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';

import Italic from './shared/Italic';
import BcpText from './shared/BcpText';
import Spacer from './shared/Spacer';
import People from './shared/People';

const Compline = ({navigation, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Italic>The Officiant begins</Italic>
        <Spacer />

        <BcpText>
          The Lord Almighty grant us a peaceful night and a perfect end.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>Officiant {'  '}</Italic>
          <BcpText>Our help is in the Name of the Lord;</BcpText>
        </BcpText>

        <BcpText>
          <Italic>People {'     '}</Italic>
          <BcpText>The maker of heaven and earth.</BcpText>
        </BcpText>
        <Spacer />

        <Italic>The Officiant may then say</Italic>
        <Spacer />

        <BcpText>Let us confess our sins to God.</BcpText>
        <Spacer />

        <Italic>Silence may be kept.</Italic>
        <Spacer />

        <Italic>Officiant and People</Italic>
        <Spacer />

        <BcpText>Almighty God, our heavenly Father:</BcpText>
        <BcpText>We have sinned against you,</BcpText>
        <BcpText>through our own fault,</BcpText>
        <BcpText>in thought, and word, and deed,</BcpText>
        <BcpText>and in what we have left undone.</BcpText>
        <BcpText>For the sake of your Son our Lord Jesus Christ,</BcpText>
        <BcpText>forgive us all our offenses;</BcpText>
        <BcpText>and grant that we may serve you</BcpText>
        <BcpText>in newness of life,</BcpText>
        <BcpText>to the glory of your Name. Amen.</BcpText>
        <Spacer />

        <Italic>Officiant</Italic>
        <Spacer />

        <BcpText>
          May the Almighty God grant us forgiveness of all our sins and the
          comfort of the Holy Spirit. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>The Officiant then says</Italic>
        <Spacer />

        {/* This is really sloppy spacing. Figure out how to do this better. */}
        <BcpText>{'                '} O God, make speed to save us.</BcpText>
        <BcpText>
          <Italic>People</Italic> {'   '} O Lord, make haste to help us.
        </BcpText>
        <Spacer />

        <Italic>Officiant and People</Italic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>Except in Lent, add </Italic> {'   '} Alleluia.
        </BcpText>
        <Spacer />

        <Italic>
          One or more of the following Psalms are sung or said. Other suitable
          selections may be substituted.
        </Italic>

        <Button
          style={styles.button}
          title="Psalm 4"
          onPress={() => navigation.navigate('Psalm 4')}
        />
        <Button
          style={styles.button}
          title="Psalm 31"
          onPress={() => navigation.navigate('Psalm 31')}
        />
        <Button
          style={styles.button}
          title="Psalm 91"
          onPress={() => navigation.navigate('Psalm 91')}
        />
        <Button
          style={styles.button}
          title="Psalm 134"
          onPress={() => navigation.navigate('Psalm 134')}
        />

        <Italic>At the end of the Psalms is sung or said</Italic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: *
        </BcpText>
        <BcpText>
          {'  '}as it was in the beginning, is now, and will be for ever. Amen.
        </BcpText>
        <Spacer />

        <Italic>
          One of the following, or some other suitable passage of Scripture, is read
        </Italic>
        <Spacer />

        <BcpText>
          Lord, you are in the midst of us, and we are called by your
          forsake us, O Lord our God. {'   '} <Italic>Jeremiah 14:9,22</Italic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>

        <Italic>or this</Italic>
        <Spacer />

        <BcpText>
          Come to me, all who labor and are heavy-laden, and I will
          give you rest. Take my yoke upon you, and learn from me;
          for I am gentle and lowly in heart, and you will find rest for 
          your souls. For my yoke is easy, and my burden is light.
          {'   '} <Italic>Matthew 11:28-30</Italic>
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

export default Compline;
