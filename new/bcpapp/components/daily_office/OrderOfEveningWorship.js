/**
 * Evening Prayer Rite Two
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';

import Italic from '../shared/Italic';
import SubTitle from '../shared/SubTitle';
import Bold from '../shared/Bold';
import SmallBold from '../shared/SmallBold';
import People from '../shared/People';
import Title from '../shared/Title';
import SmallItalic from '../shared/SmallItalic';
import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import SmallBcpText from '../shared/SmallBcpText';
import Collapsible from 'react-native-collapsible';
import Officiant from '../shared/Officiant';

const DailyDevotion = ({navigation, name}) => {
  const [collapsedInstructions, changeCollapsedInstructions] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Title>An Order of Worship for the Evening</Title>
        <Button
          title={'Concerning the Service'}
          onPress={() => changeCollapsedInstructions(!collapsedInstructions)}
        />
        <Collapsible collapsed={collapsedInstructions}>
          <SmallItalic>
            This Order provides a form of evening service or vespers for use on
            suitable occasions in the late afternoon or evening. It may be used
            as a complete rite in place of Evening Prayer, or as the
            introduction to Evening Prayer or some other service, or as the
            prelude to an evening meal or other activity. It is appropriate also
            for use in private houses.
          </SmallItalic>
          <Spacer />

          <SmallItalic>
            Any part or parts of this service may be lead by lay persons. A
            priest or deacon, when presiding, should read the Prayer for Light,
            and the Blessing or Dismissal at the end. The bishop, when present,
            should give the Blessing.
          </SmallItalic>
          <Spacer />

          <SmallItalic>
            This order is not appropriate for use on Monday, Tuesday, or
            Wednesday in Holy Week, or on Good Friday. Easter Eve has its own
            form for the Lighting of the Paschal Candle.
          </SmallItalic>
          <Spacer />

          <SmallItalic>
            For the Short Lesson at the beginning of the service, any one of the
            following is also appropriate, especially for the seasons suggested:
          </SmallItalic>
          <Spacer />

          <SmallItalic>
            Isaiah 60:19-20 (Advent) {'\n'}
            Luke 12:35-37 (Advent) {'\n'}
            John 1:1-5 (Christmas) {'\n'}
            Isaiah 60:1-3 (Epiphany) {'\n'}1 John 1:5-7 (Lent) {'\n'}
            John 12:35-36a (Lent) Revelation 21:10,22-24 (Easter) {'\n'}
            Psalm 36:5-9 (Ascension) {'\n'}
            Joel 2:28-30 (Whitsunday) {'\n'}
            Colossians 1:9,11-14 (Saints' Days) {'\n'}1 Peter 2:9 (Saints' Days)
            {'\n'}
            Revelation 22:1,4-5 (Saints' Days){'\n'}
          </SmallItalic>
          <SmallItalic>
            Any of the prayers in contemporary language may be adapted to
            traditional language by changing the pronouns and the corresponding
            verbs.
          </SmallItalic>
          <Spacer />
        </Collapsible>

        <SmallItalic>
          The church is dark, or partially so, when the service is to begin.
          {'\n'}
          {'\n'}
          All stand, and the Officiant greets the people with these words.
        </SmallItalic>
        <Spacer />

        <BcpText>
          {'              '} Light and peace, in Jesus Christ our Lord.
        </BcpText>
        <People>Thanks be to God.</People>
        <Spacer />

        <SmallItalic>
          In place of the above, from Easter Day through the Day of Pentecost
        </SmallItalic>
        <Spacer />

        <Officiant>Alleluia. Christ is risen.</Officiant>
        <People>The Lord is risen indeed. Alleluia</People>
        <Spacer />

        <SmallItalic>In Lent and on other penitential occasions</SmallItalic>
        <Spacer />

        <Officiant>Bless the Lord who forgives all our sins;</Officiant>
        <People>His mercy endures forever.</People>
        <Spacer />

        <SmallItalic>
          One of the following, or some other Short Lesson of Scripture
          appropriate to the occasion or to the season, may then be read
        </SmallItalic>
        <Spacer />

        <BcpText>
          Jesus said, "You are the light of the world. A city built on a hill
          cannot be hid. No one lights a lamp to put it under a bucket, but on a
          lamp-stand where it gives light for everyone in the house. And you,
          like the lamp, must shed light among your fellow men, so that they may
          see the deed you do, and give glory to your Father in heaven." {'   '}
          <SmallItalic>Matthew 5:14-16</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          It is not ourselves that we proclaim; we proclaim Christ Jesus as
          Lord, and ourselves as your servants, for Jesus' sake. For the same
          God who said, "Out of darkness let light shine," has caused his light
          to shine within us, to give the light of revelation -- the revelation
          of the glory of God in the face of Jesus Christ. {'   '}
          <SmallItalic>2 Corinthians 4:5-6</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          If I say, "Surely the darkness will cover me, and the light around me
          turn to night," darkness is not dark to you, O Lord; the night is as
          bright as the day; darkness and light to you are both alike. {'   '}
          <SmallItalic>Psalm 139:10-11</SmallItalic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          The Officiant then says the Prayer for Light, using any one of the
          following or some other suitable prayer, first saying
        </SmallItalic>
        <Spacer />

        <BcpText>
          Let us pray.{'\n'}
          {'\n'}
          Almighty God, we give you thanks for surrounding us, as daylight
          fades, with the brightness of the vesper light; and we implore you of
          your great mercy that, as you enfold us with the radiance of this
          light, so you would shine into our hearts the brightness of your Holy
          Spirit; through Jesus Christ our Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Grant us, Lord, the lamp of charity which never fails, that it may
          burn in us and shed its light on those around us, and that by its
          brightness we may have a vision of that holy City, where dwells the
          true and never-failing Light, Jesus Christ our Lord.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          O Lord God Almighty, as you have taught us to call the evening, the
          morning, and the noonday one day; and have made the sun to know its
          going down: Dispel the darkness of our hearts, that by your brightness
          we may know you to be the true God and eternal light, living and
          reigning for ever and ever. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Lighten our darkness, we beseech thee, O Lord; and by thy great mercy
          defend us from all perils and dangers of this night; for the love of
          thy only Son, our Savior, Jesus Christ.
          <Italic> Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>Advent</Italic>
        <Spacer />

        <SmallItalic>Collect for the First Sunday of Advent</SmallItalic>
        <Spacer />

        <Italic>
          Christmas, Epiphany, and other Feasts of the Incarnation
        </Italic>
        <Spacer />

        <SmallItalic>Collect for the First Sunday after Christmas</SmallItalic>
        <Spacer />

        <Italic>Lent and other times of penitence </Italic>
        <Spacer />

        <BcpText>
          Almighty and most merciful God, kindle within us the fire of love,
          that by its cleansing flame we may be purged of all our sins and made
          worthy to worship you in spirit and in truth; through Jesus Christ our
          Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>Easter Season </Italic>
        <Spacer />

        <BcpText>
          Eternal God, who led your ancient people into freedom by a pillar of
          cloud by day and a pillar of fire by night: Grant that we who walk in
          the light of your presence may rejoice in the liberty of the children
          of God; through Jesus Christ our Lord.
          <Italic> Amen. </Italic>
        </BcpText>
        <Spacer />

        <Italic>Festivals of Saints</Italic>
        <Spacer />

        <BcpText>
          Lord Christ, your saints have been the lights of the world in every
          generation: Grant that we who follow in their footsteps may be made
          worthy to enter with them into that heavenly country where you live
          and reign for ever and ever.
          <Italic> Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          The candles at the Altar are now lighted, as are other candles and
          lamps as may be convenient.
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          During the candle-lighting, an appropriate anthem or psalm may be
          sung, or silence kept.
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          The following hymn, or a metrical version of it, or some other hymn,
          is then sung
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Bold>O Gracious Light</Bold> {'   '}
          <Italic>Phos hilaron</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          O gracious light, {'\n'}
          pure brightness of the everliving Father in heaven, {'\n'}O Jesus
          Christ, holy and blessed!{'\n'}
          {'\n'}
          Now as we come to the setting of the sun, {'\n'}
          and our eyes behold the vesper light, {'\n'}
          we sing your praises, O God: Father, Son, and Holy Spirit.{'\n'}
          {'\n'}
          You are worthy at all times to be praised by happy voices,{'\n'}O Son
          of God, O Giver of Life, {'\n'}
          and to be glorified through all the worlds.
        </BcpText>
        <Spacer />

        <SmallItalic>
          The service may then continue in any of the following ways:
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          With Evening Prayer, beginning with the Psalms; or with some other
          Office or Devotion;
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          With the celebration of the Holy Eucharist, beginning with the
          Salutation and Collect of the Day;
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          Or, it may be followed by a meal or other activity, in which case Phos
          hilaron may be followed by the Lord's Prayer and a grace or blessing;
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          Or, it may continue as a complete evening Office with the following
          elements:
        </SmallItalic>
        <Spacer />

        <BcpText>
          <SmallBold>Selection from the Psalter.</SmallBold>{' '}
          <SmallBcpText>
            {' '}
            Silence, or a suitable Collect, or both, may follow the Psalmody.
            {'\n'}
          </SmallBcpText>
          {'\n'}
          <SmallBold>Bible Reading.</SmallBold>
          <SmallBcpText>
            {' '}
            A sermon or homily, a passage from Christian literature, or a brief
            silence, may follow the Reading.{'\n'}
          </SmallBcpText>
          {'\n'}
          <SmallBold>Canticle.</SmallBold>
          <SmallBcpText>
            {' '}
            The Magnificat or other canticle, or some other hymn of praise.
            {'\n'}
          </SmallBcpText>
          {'\n'}
          <SmallBold>Prayers.</SmallBold>
          <SmallBcpText>
            {' '}
            A litany, or other suitable devotions, including the Lord's Prayer.
            {'\n'}
          </SmallBcpText>
          {'\n'}
          <SmallBold>Blessing or Dismissal,</SmallBold>
          <SmallBcpText>
            {' '}
            or both. The Peace may then be exchanged.
          </SmallBcpText>
        </BcpText>
        <Spacer />

        <SmallItalic>
          On feasts or other days of special significance, the Collect of the
          Day, or one proper to the season, may precede the Blessing or
          Dismissal. On other days, either of the following, or one of the
          Collects from Evening Prayer or from Compline, may be so used.
        </SmallItalic>
        <Spacer />

        <BcpText>
          Blessed are you, O Lord, the God of our fathers, creator of the
          changes of day and night, giving rest to the weary, renewing the
          strength of those who are spent, bestowing upon us occasions of song
          in the evening. As you have protected us in the day that is past, so
          be with us in the coming night; keep us from every sin, every evil,
          and every fear; for you are our light and salvation, and the strength
          of our life. To you be glory for endless ages. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />
        <BcpText>
          Almighty, everlasting God, let our prayer in your sight be as incense,
          the lifting up of our hands as the evening sacrifice. Give us grace to
          behold you, present in your Word and Sacraments, and to recognize you
          in the lives of those around us. Stir up in us the flame of that love
          which burned in the heart of your Son as he bore his passion, and let
          it burn in us to eternal life and to the ages of ages.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          A bishop or priest may use the following or some other blessing or
          grace
        </SmallItalic>
        <Spacer />

        <BcpText>
          The Lord bless you and keep you. <Italic>Amen.</Italic> {'\n'}
          The Lord make his face to shine upon you {'\n'}
          {'   '}and be gracious to you. <Italic>Amen.</Italic> {'\n'}
          The Lord lift up his countenance upon you {'\n'}
          {'   '}and give you peace. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          A deacon or lay person using the preceding blessing substitutes "us"
          for "you."
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          A dismissal may be used (adding "Alleluia, alleluia" in Easter Season)
        </SmallItalic>
        <Spacer />

        <SmallItalic>The People respond</SmallItalic>
        <Spacer />

        <BcpText>Thanks be to God.</BcpText>
        <Spacer />

        <SmallItalic>In Easter Season the People respond</SmallItalic>
        <Spacer />

        <BcpText>Thanks be to God. Alleluia, alleluia.</BcpText>
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

export default DailyDevotion;
