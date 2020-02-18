/**
 * Evening Prayer Rite Two
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';

import Italic from '../shared/Italic';
import SubTitle from '../shared/SubTitle';
import Title from '../shared/Title';
import SmallItalic from '../shared/SmallItalic';
import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import SmallBcpText from '../shared/SmallBcpText';
import Collapsible from 'react-native-collapsible';

const DailyDevotion = ({navigation, name}) => {
  const [collapsedInstructions, changeCollapsedInstructions] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Title>Daily Devotions for Families and Individuals</Title>
        <Button
          title={collapsedInstructions ? 'Instructions' : 'Close Instructions'}
          onPress={() => changeCollapsedInstructions(!collapsedInstructions)}
        />
        <Collapsible collapsed={collapsedInstructions}>
          <SmallBcpText>
            These devotions follow the basic structure of the Daily Office of
            the Church.{'\n'}
            {'\n'}
            When more than one person is present, the Reading and the Collect
            should be read by one person, and the other parts said in unison, or
            in some other convenient manner. (For suggestions about reading the
            Psalms, seen page 582.){'\n'}{' '}
            {/* TODO figure out how to link this */}
            {'\n'}
            For convenience, appropriate Psalms, Readings, and Collects are
            provided in each service. When desired, however, the Collect of the
            {'\n'}
            Day, or any of the Collects appointed in the Daily Offices, may be
            used instead.{'\n'}
            {'\n'}
            The Psalms and Readings may be replaced by those appointed in{'\n'}
            {'\n'}
            a) the Lectionary for Sundays, Holy Days, the Common of Saints, and
            Various Occasions, page 888{'\n'}{' '}
            {/* TODO figure out how to link this */}
            {'\n'}
            b) the Daily Office Lectionary, page 934{'\n'}{' '}
            {/* TODO figure out how to link this */}
            {'\n'}
            c) some other manual of devotion which provides daily selections for
            the Church Year.
          </SmallBcpText>
        </Collapsible>
        <Spacer />

        <SubTitle>In the Morning</SubTitle>
        <BcpText>
          <Italic>From Psalm 51</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Open my lips, O Lord, *{'\n'}
          {'    '}and my mouth shall proclaim your praise.{'\n'}
          Create in me a clean heart, O God, *{'\n'}
          {'    '}and renew a right spirit within me.{'\n'}
          Cast me not away from your presence *{'\n'}
          {'    '}and take not your holy Spirit from me.{'\n'}
          Give me the joy of your saving help again *{'\n'}
          {'    '}and sustain me with your bountiful Spirit.{'\n'}
          Glory to the Father, and to the Son, and to the Holy Spirit: *{'\n'}
          {'    '}as it was in the beginning, is now, and will be for ever.
          Amen.{' '}
        </BcpText>
        <Spacer />

        <Italic>A Reading</Italic>
        <Spacer />
        <BcpText>
          Blessed be the God and Father of our Lord Jesus Christ! By his great
          mercy we have been born anew to a living hope through the resurrection
          of Jesus Christ from the dead.
          <SmallItalic>1 Peter 1:3</SmallItalic>
        </BcpText>
        <Spacer />

        <SmallItalic>A period of silence may follow.</SmallItalic>
        <Spacer />
        <SmallItalic>
          A hymn or canticle may be used; the Apostles' Creed may be said.
        </SmallItalic>
        <Spacer />
        <SmallItalic>
          Prayers may be offered for ourselves and others.
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Italic>The Lord's Prayer</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>The Collect</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Lord God, almighty and everlasting Father, you have brought us in
          safety to this new day: Preserve us with your mighty power, that we
          may not fall into sin, nor be overcome by adversity; and in all we do,
          direct us to the fulfilling of your purpose; through Jesus Christ our
          Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SubTitle>At Noon</SubTitle>

        <BcpText>
          <Italic>From Psalm 113</Italic>{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          Give praise, you servants of the LORD; *{'\n'}
          {'    '}praise the Name of the LORD.{'\n'}
          Let the Name of the LORD be blessed, *{'\n'}
          {'    '}from this time forth for evermore.{'\n'}
          From the rising of the sun to its going down *{'\n'}
          {'    '}let the Name of the LORD be praised.{'\n'}
          The LORD is high above all nations, *{'\n'}
          {'    '}and his glory above the heavens.{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>A Reading</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          O God, you will keep in perfect peace those whose minds are{'\n'}
          fixed on you; for in returning and rest we shall be saved; in{'\n'}
          quietness and trust shall be our strength.{'    '}
          <SmallItalic>Isaiah 26:3; 30:15</SmallItalic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          Prayers may be offered for ourselves and others.
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Italic>The Lord's Prayer</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>The Collect</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Blessed Savior, at this hour you hung upon the cross, stretching out
          your loving arms: Grant that all the peoples of the earth may look to
          you and be saved; for your mercies' sake. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          Lord Jesus Christ, you said to your apostles, "Peace I give to you; my
          own peace I leave with you:" Regard not our sins, but the faith of
          your Church, and give to us the peace and unity of that heavenly City,
          where with the Father and the Holy Spirit you live and reign, now and
          for ever. <Italic>Amen.</Italic>{' '}
        </BcpText>
        <Spacer />

        <SubTitle>In the Early Evening</SubTitle>

        <SmallItalic>
          This devotion my be used before or after the evening meal.{'\n'}
          {'\n'}
          The Order of Worship for the Evening, page 109, may be used instead.
        </SmallItalic>
        <Spacer />

        <BcpText>
          O gracious light,{'\n'}
          pure brightness of the everliving Father in heaven,{'\n'}O Jesus
          Christ, holy and blessed!{'\n'}
          {'\n'}
          Now as we come to the setting of the sun,{'\n'}
          and our eyes behold the vesper light,{'\n'}
          we sing your praises, O God: Father, Son, and Holy Spirit.{'\n'}
          {'\n'}
          You are worthy at all times to be praised by happy voices,{'\n'}O Son
          of God, O Giver of Life,{'\n'}
          and to be glorified through all the worlds.
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>A Reading</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          It is not ourselves that we proclaim; we proclaim Christ Jesus as
          Lord, and ourselves as your servants, for Jesus' sake. For the same
          God who said, "Out of darkness let light shine," has caused his light
          to shine within us, to give the light of revelation--the revelation of
          the glory of God in the face of Jesus Christ.{'     '}
          <SmallItalic>2 Corinthians 4:5-6</SmallItalic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          Prayers may be offered for ourselves and others.
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Italic>The Lord's Prayer</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>The Collect</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Lord Jesus, stay with us, for evening is at hand and the day is past;
          be our companion in the way, kindle our hearts, and awaken hope, that
          we may know you as you are revealed in Scripture and the breaking of
          bread. Grant this for the sake of your love. <Italic>Amen.</Italic>{' '}
        </BcpText>
        <Spacer />

        <SubTitle>At the Close of Day</SubTitle>

        <Italic>Psalm 134</Italic>
        <Spacer />

        <BcpText>
          Behold now, bless the LORD, all you servants of the LORD, *{'\n'}
          {'    '}you that stand by night in the house of the LORD.{'\n'}
          Lift up your hands in the holy place and bless the LORD; *{'\n'}
          {'    '}the LORD who made heaven and earth bless you out of Zion.
        </BcpText>

        <Italic>A Reading</Italic>
        <Spacer />

        <BcpText>
          Lord, you are in the midst of us and we are called by your Name: Do
          not forsake us, O Lord our God.{'    '}
          <SmallItalic>Jeremiah 14:9,22</SmallItalic>
        </BcpText>
        <Spacer />

        <SmallItalic>The following may be said</SmallItalic>
        <Spacer />

        <BcpText>
          Lord, you now have set your servant free *{'\n'}
          {'    '}to go in peace as you have promised;{'\n'}
          For these eyes of mine have seen the Savior, *{'\n'}
          {'    '}whom you have prepared for all the world to see;{'\n'}A Light
          to enlighten the nations, *{'\n'}
          {'    '}and the glory of your people Israel.
        </BcpText>
        <Spacer />

        <SmallItalic>
          Prayers for ourselves and others may follow. It is appropriate that
          prayers of thanksgiving for the blessings of the day, and penitence
          for our sins, be included.
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Italic>The Lord's Prayer</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          <Italic>The Collect</Italic>
        </BcpText>
        <Spacer />

        <BcpText>
          Visit this place, O Lord, and drive far from it all snares of the
          enemy; let your holy angels dwell with us to preserve us in peace; and
          let your blessing be upon us always; through Jesus Christ our Lord.{' '}
          <Italic>Amen.</Italic>
        </BcpText>
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

export default DailyDevotion;
