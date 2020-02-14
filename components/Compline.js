/**
 * My profile
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';

import Italic from './shared/Italic';
import SmallItalic from './shared/SmallItalic';
import BcpText from './shared/BcpText';
import Spacer from './shared/Spacer';
import People from './shared/People';
import Officiant from './shared/Officiant';

const Compline = ({navigation, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <SmallItalic>The Officiant begins</SmallItalic>
        <Spacer />

        <BcpText>
          The Lord Almighty grant us a peaceful night and a perfect end.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Officiant {'  '}</SmallItalic>
          <BcpText>Our help is in the Name of the Lord;</BcpText>
        </BcpText>

        <BcpText>
          <SmallItalic>People {'     '}</SmallItalic>
          <BcpText>The maker of heaven and earth.</BcpText>
        </BcpText>
        <Spacer />

        <SmallItalic>The Officiant may then say</SmallItalic>
        <Spacer />

        <BcpText>Let us confess our sins to God.</BcpText>
        <Spacer />

        <SmallItalic>Silence may be kept.</SmallItalic>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
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

        <SmallItalic>Officiant</SmallItalic>
        <Spacer />

        <BcpText>
          May the Almighty God grant us forgiveness of all our sins and the
          comfort of the Holy Spirit. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>The Officiant then says</SmallItalic>
        <Spacer />

        {/* This is really sloppy spacing. Figure out how to do this better. */}
        <BcpText>{'                '} O God, make speed to save us.</BcpText>
        <BcpText>
          <SmallItalic>People</SmallItalic> {'   '} O Lord, make haste to help
          us.
        </BcpText>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Except in Lent, add </SmallItalic> {'   '} Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>
          One or more of the following Psalms are sung or said. Other suitable
          selections may be substituted.
        </SmallItalic>

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

        <SmallItalic>At the end of the Psalms is sung or said</SmallItalic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: *
        </BcpText>
        <BcpText>
          {'  '}as it was in the beginning, is now, and will be for ever. Amen.
        </BcpText>
        <Spacer />

        <SmallItalic>
          One of the following, or some other suitable passage of Scripture, is
          read
        </SmallItalic>
        <Spacer />

        <BcpText>
          Lord, you are in the midst of us, and we are called by your forsake
          us, O Lord our God. {'   '} <Italic>Jeremiah 14:9,22</Italic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          Come to me, all who labor and are heavy-laden, and I will give you
          rest. Take my yoke upon you, and learn from me; for I am gentle and
          lowly in heart, and you will find rest for your souls. For my yoke is
          easy, and my burden is light.
          {'   '} <Italic>Matthew 11:28-30</Italic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          Be sober, be watchful. Your adversary the devil prowls around like a
          roaring lion, seeking someone to devour. Resist him, firm in your
          faith.
          {'   '} <Italic>1 Peter 5:8-9a</Italic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>A hymn suitable for the evening may be sung.</SmallItalic>
        <Spacer />

        <SmallItalic>Then follows</SmallItalic>
        <Spacer />

        <BcpText>
          V. {'  '} Into your hands, O Lord, I commend my spirit;{'\n'}
          R. {'  '} For you have redeemed me, O Lord, O God of truth.{'\n'}
          V. {'  '} Keep us, O Lord, as the apple of your eye;{'\n'}
          R. {'  '} Hide us under the shadow of your wings.{'\n'}
        </BcpText>
        <Spacer />

        <BcpText>
          Lord, have mercy.{'\n'}
          <Italic>Christ, have mercy.</Italic>
          {'\n'}
          Lord, have mercy.{'\n'}
        </BcpText>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <BcpText>
          Our Father, who art in heaven,{'\n'}
          {'   '} hallowed be thy Name, {'\n'}
          {'   '} thy kingdom come, {'\n'}
          {'   '} thy will be done, {'\n'}
          {'   '} {'   '} on earth as it is in heaven. {'\n'}
          Give us this day our daily bread. {'\n'}
          And forgive us our trespasses, {'\n'}
          {'   '} as we forgive those {'\n'}
          {'   '} {'   '} who trespass against us. {'\n'}
          And lead us not into temptation, {'\n'}
          {'   '} but deliver us from evil.
        </BcpText>
        <Spacer />
        <BcpText>
          Our Father in heaven, {'\n'}
          {'   '} hallowed be your Name, {'\n'}
          {'   '} your kingdom come, {'\n'}
          {'   '} your will be done, {'\n'}
          {'   '} {'   '} on earth as in heaven. {'\n'}
          Give us today our daily bread. {'\n'}
          Forgive us our sins {'\n'}
          {'   '} as we forgive those {'\n'}
          {'   '} {'   '} who sin against us. {'\n'}
          Save us from the time of trial, {'\n'}
          {'   '} and deliver us from evil.
        </BcpText>
        <Spacer />

        <Officiant>Lord, hear our prayer;</Officiant>
        <People>And let our cry come to you.</People>
        <Officiant>Let us pray.</Officiant>
        <Spacer />

        <SmallItalic>
          The Officiant then says one of the following Collects
        </SmallItalic>
        <Spacer />

        <BcpText>
          Be our light in the darkness, O Lord, and in your great mercy defend
          us from all perils and dangers of this night; for the love of your
          only Son, our Savior Jesus Christ. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Be present, O merciful God, and protect us through the hours of this
          night, so that we who are wearied by the changes and chances of this
          life may rest in your eternal changelessness; through Jesus Christ our
          Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Look down, O Lord, from your heavenly throne, and illumine this night
          with your celestial brightness; that by night as by day your people
          may glorify your holy Name; through Jesus Christ our Lord.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Visit this place, O Lord, and drive far from it all snares of the
          enemy; let your holy angels dwell with us to preserve us in peace; and
          let your blessing be upon us always; through Jesus Christ our Lord.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>A Collect for Saturdays</Italic>
        <Spacer />

        <BcpText>
          We give you thanks, O God, for revealing your Son Jesus Christ to us
          by the light of his resurrection: Grant that as we sing your glory at
          the close of this day, our joy may abound in the morning as we
          celebrate the Paschal mystery; through Jesus Christ our Lord.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>One of the following prayers may be added</SmallItalic>
        <Spacer />

        <BcpText>
          Keep watch, dear Lord, with those who work, or watch, or weep this
          night, and give your angels charge over those who sleep. Tend the
          sick, Lord Christ; give rest to the weary, bless the dying, soothe the
          suffering, pity the afflicted, shield the joyous; and all for your
          love's sake. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          O God, your unfailing providence sustains the world we live in and the
          life we live: Watch over those, both night and day, who work while
          others sleep, and grant that we may never forget that our common life
          depends upon each other's toil; through Jesus Christ our Lord.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          Silence may be kept, and free intercessions and thanksgivings may be
          offered.
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          The service concludes with the Song of Simeon with this Antiphon,
          which is sung or said by all
        </SmallItalic>
        <Spacer />

        <BcpText>
          Guide us waking, O Lord, and guard us sleeping; that awake we may
          watch with Christ, and asleep we may rest in peace.
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>In Easter Season, add {'    '}</SmallItalic>
          <BcpText>Alleluia, alleluia, alleluia.</BcpText>
        </BcpText>
        <Spacer />

        <BcpText>
          Lord, you now have set your servant free *{'\n'}
          {'  '} to go in peace as you have promised;
        </BcpText>

        <BcpText>
          For these eyes of mine have seen the Savior, *{'\n'}
          {'  '} whom you have prepared for all the world to see:
        </BcpText>

        <BcpText>
          A Light to enlighten the nations, *{'\n'}
          {'  '} and the glory of your people Israel.
        </BcpText>

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
          {'  '} as it was in the beginning, is now, and will be for ever. Amen.{' '}
          {'\n'}
        </BcpText>
        <Spacer />

        <SmallItalic>All repeat the Antiphon</SmallItalic>
        <Spacer />

        <BcpText>
          Guide us waking, O Lord, and guard us sleeping; that awake we may
          watch with Christ, and asleep we may rest in peace.
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>In Easter Season, add {'    '}</SmallItalic>
          <BcpText>Alleluia, alleluia, alleluia.</BcpText>
        </BcpText>
        <Spacer />

        <Officiant>Let us bless the Lord.</Officiant>
        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>The officiant concludes</SmallItalic>
        <Spacer />

        <BcpText>
          The almighty and merciful Lord, Father, Son, and Holy Spirit, bless us
          and keep us. <Italic>Amen.</Italic>
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
