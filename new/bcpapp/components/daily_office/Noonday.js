/**
 * Compline. A lovely service for the Evening.
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';

import Italic from '../shared/Italic';
import SmallItalic from '../shared/SmallItalic';
import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import People from '../shared/People';
import Officiant from '../shared/Officiant';
import Title from '../shared/Title';
import LordsPrayer from '../shared/LordsPrayer';

const Noonday = ({navigation, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Title>An Order of Service for Noonday</Title>
        <Spacer />

        <Officiant>O God, make speed to save us.</Officiant>
        <People>O Lord, make haste to help us.</People>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. Amen.
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Except in Lent, add</SmallItalic>
          {'    '}Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>A suitable hymn may be sung.</SmallItalic>
        <Spacer />

        <SmallItalic>
          One or more of the following Psalms is sung or said. Other suitable
          selections include Psalms 19,67, one or more sections of Psalm 119, or
          a selection from Psalms 120 through 133.
        </SmallItalic>
        <Spacer />

        <Button
          style={styles.button}
          title="Psalm 119"
          onPress={() => navigation.navigate('Psalm 119')}
        />
        <Button
          style={styles.button}
          title="Psalm 121"
          onPress={() => navigation.navigate('Psalm 121')}
        />
        <Button
          style={styles.button}
          title="Psalm 126"
          onPress={() => navigation.navigate('Psalm 126')}
        />

        <SmallItalic>At the end of the Psalms is sung or said</SmallItalic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit:{'\n'}
          {'    '}as it was in the beginning, is now, and will be for ever.
          Amen.
        </BcpText>
        <Spacer />

        <SmallItalic>
          One of the following, or some other suitable passage of Scripture, is
          read
        </SmallItalic>
        <Spacer />

        <BcpText>
          The love of God has been poured into our hearts through the Holy
          Spirit that has been given to us.{'    '}
          <SmallItalic>Romans 5:5</SmallItalic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>or the following</SmallItalic>
        <Spacer />

        <BcpText>
          If anyone is in Christ he is a new creation; the old has passed away,
          behold the new has come. All this is from God, who through Christ
          reconciled us to himself and gave us the ministry of reconciliation.
          {'    '}
          <SmallItalic>2 Corinthians 5:17-18</SmallItalic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          From the rising of the sun to its setting my Name shall be great among
          the nations, and in every place incense shall be offered to my Name,
          and a pure offering; for my Name shall be great among the nations,
          says the Lord of Hosts.{'    '}
          <SmallItalic>Malachi 1:11</SmallItalic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>A meditation, silent or spoken, may follow.</SmallItalic>
        <Spacer />

        <SmallItalic>The Officiant then begins the Prayers</SmallItalic>
        <Spacer />

        <BcpText>
          Lord, have mercy.{'\n'}
          <Italic>Christ, have mercy.</Italic>
          {'\n'}
          Lord, have mercy.
        </BcpText>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <LordsPrayer />
        <Spacer />

        <Officiant>Lord, hear our prayer;</Officiant>
        <People>And let our cry come to you.</People>
        <Officiant>Let us pray.</Officiant>
        <Spacer />

        <BcpText>
          The Officiant then says one of the following Collect. If desired, the
          Collect of the Day may be used.
        </BcpText>
        <Spacer />

        <BcpText>
          Heavenly Father, send your Holy Spirit into our hearts, to direct and
          rule us according to your will, to comfort us in all our afflictions,
          to defend us from all error, and to lead us into all truth; through
          Jesus Christ our Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Blessed Savior, at this hour you hung upon the cross, stretching out
          your loving arms: Grant that all the peoples of the earth may look to
          you and be saved; for your tender mercies' sake.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Almighty Savior, who at noonday called your servant Saint Paul to be
          an apostle to the Gentiles: We pray you to illumine the world with the
          radiance of your glory, that all nations may come and worship you; for
          you live and reign for ever and ever. <Italic>Amen</Italic>.
        </BcpText>
        <Spacer />

        <BcpText>
          Lord Jesus Christ, you said to your apostles, "Peace I give to you; my
          peace I leave with you:" Regard not our sins, but the faith of your
          Church, and give to us the peace and unity of that heavenly city,
          where with the Father and the Holy Spirit you live and reign, now and
          for ever. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>Free intercessions may be offered.</SmallItalic>
        <Spacer />

        <SmallItalic>The service concludes as follows</SmallItalic>
        <Spacer />

        <Officiant>Let us bless the Lord.</Officiant>
        <People>Thanks be to God.</People>
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

export default Noonday;
