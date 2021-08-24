/**
 * Evening Prayer Rite Two
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Italic from '../shared/Italic';
import Bold from '../shared/Bold';
import SubTitle from '../shared/SubTitle';
import Title from '../shared/Title';
import SmallItalic from '../shared/SmallItalic';
import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import People from '../shared/People';
import LordsPrayer from '../shared/LordsPrayer';
import Officiant from '../shared/Officiant';
import DailyReadings from '../shared/DailyReadings';

const Compline = ({navigation, name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Title>
          Daily Evening Prayer:{'\n'}
          Rite Two
        </Title>

        <SmallItalic>
          The Officiant begins the service with one or more of the following
          sentences of Scripture, or of those on pages 75-78;
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          or with the Service of Light on pages 109-112, and continuing with the
          appointed Psalmody;
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          or with the versicle "O God, make speed to save us" on page 117
        </SmallItalic>
        <Spacer />

        <BcpText>
          Let my prayer be set forth in your sight as incense, the lifting up of
          my hands as the evening sacrifice. {'   '}
          <SmallItalic>Psalm 141:2</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          Grace to you and peace from God our Father and from the Lord Jesus
          Christ. {'   '}
          <SmallItalic>Philippians 1:2</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          Worship the Lord in the beauty of his holiness; let the whole earth
          tremble before him. {'   '}
          <SmallItalic>Psalm 96:9</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          Yours is the day, O God, yours also the night; you established the
          moon and the sun. You fixed all the boundaries of the earth; you made
          both summer and winter. {'   '}
          <SmallItalic>Psalm 74:15,16</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          I will bless the Lord who gives me counsel; my heart teaches me, night
          after night. I have set the Lord always before me; because he is at my
          right hand, I shall not fall. {'   '}
          <SmallItalic>Psalm 16:7,8</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          Seek him who made the Pleiades and Orion, and turns deep darkness into
          the morning, and darkens the day into night; who calls for the waters
          of the sea and pours them out upon the surface of the earth: The Lord
          is his name. {'   '}
          <SmallItalic>Amos 5:8</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          If I say, "Surely the darkness will cover me, and the light around me
          turn to night," darkness is not dark to you, O Lord; the night is as
          bright as the day; darkness and light to you are both alike. {'   '}
          <SmallItalic>Psalm 139:10,11</SmallItalic>
          {'\n'}
        </BcpText>
        <BcpText>
          Jesus said, "I am the light of the world; whoever follows me will not
          walk in darkness, but will have the light of life."
          <SmallItalic>John 8:12</SmallItalic>
          {'\n'}
        </BcpText>
        <SmallItalic>
          The following Confession of Sin may then be said; or the Office may
          continue at once with "O God make speed to save us."
          {'\n'}
        </SmallItalic>
        <SubTitle>Confession of Sin</SubTitle>
        <SmallItalic>The Officiant says to the people</SmallItalic>
        <Spacer />

        <BcpText>
          Dear friends in Christ, here in the presence of Almighty God, let us
          kneel in silence, and with penitent and obedient hearts confess our
          sins, that we may obtain forgiveness by his infinite goodness and
          mercy.
          {'\n'}
        </BcpText>
        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>Let us confess our sins against God and our neighbor.</BcpText>
        <Spacer />

        <SmallItalic>Silence may be kept.</SmallItalic>
        <Spacer />

        <SmallItalic>Officiant and People together, all kneeling</SmallItalic>
        <Spacer />

        <BcpText>
          Most merciful God,{'\n'}
          we confess that we have sinned against you{'\n'}
          in thought, word, and deed,{'\n'}
          by what we have done,{'\n'}
          and by what we have left undone.{'\n'}
          We have not loved you with our whole heart;{'\n'}
          we have not loved our neighbors as ourselves.{'\n'}
          We are truly sorry and we humbly repent.{'\n'}
          For the sake of your Son Jesus Christ,{'\n'}
          have mercy on us and forgive us;{'\n'}
          that we may delight in your will,{'\n'}
          and walk in your ways,{'\n'}
          to the glory of your Name. Amen.
        </BcpText>
        <Spacer />

        <SmallItalic>The Priest alone stands and says</SmallItalic>
        <Spacer />

        <BcpText>
          Almighty God have mercy on you, forgive you all your sins through our
          Lord Jesus Christ, strengthen you in all goodness, and by the power of
          the Holy Spirit keep you in eternal life. <Italic>Amen.</Italic>
          {'\n'}
        </BcpText>
        <SmallItalic>
          A deacon or lay person using the preceding form remains kneeling, and
          substitutes "us" for "you" and "our" for "your."
        </SmallItalic>
        <Spacer />

        <SubTitle>The Invitatory and Psalter</SubTitle>
        <SmallItalic>All stand</SmallItalic>
        <Spacer />

        <Officiant> O God, make speed to save us.</Officiant>
        <People>O Lord, make haste to help us.</People>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. Amen.
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Except in Lent, add</SmallItalic>
          {'   '} Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>
          The following, or some other suitable hymn, or an Invitatory Psalm,
          may be sung or said.
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Bold>O Gracious Light</Bold> <Italic>Phos hilaron</Italic> {'\n'}
        </BcpText>
        <BcpText>
          O gracious light,{'\n'}
          pure brightness of the everliving Father in heaven,{'\n'}O Jesus
          Christ, holy and blessed! {'\n'}
          {'\n'}
          Now as we come to the setting of the sun,{'\n'}
          and our eyes behold the vesper light,{'\n'}
          we sing your praises, O God: Father, Son, and Holy Spirit. {'\n'}
          {'\n'}
          You are worthy at all times to be praised by happy voices,{'\n'}O Son
          of God, O Giver of Life,{'\n'}
          and to be glorified through all the worlds. {'\n'}
        </BcpText>
        <BcpText>
          <SmallItalic>Then follows</SmallItalic>
          {'\n'}
          {'\n'}
          <Bold>The Psalm or Psalms Appointed</Bold>
          {'\n'}
          {'\n'}
          <SmallItalic>At the end of the Psalms is sung or said</SmallItalic>
          {'\n'}
          {'\n'}
          Glory to the Father, and to the Son, and to the Holy Spirit: * as it
          was in the beginning, is now, and will be for ever. Amen. {'\n'}
          {'\n'}
        </BcpText>
        <SubTitle>The Lessons</SubTitle>
        <DailyReadings />
        <SmallItalic>
          One or two lessons, as appointed, are read, the Reader first saying
        </SmallItalic>
        <Spacer />

        <BcpText>A Reading (Lesson) from ________________.</BcpText>
        <Spacer />

        <SmallItalic>
          A citation giving chapter and verse may be added.
        </SmallItalic>
        <Spacer />

        <SmallItalic>After each Lesson the Reader may say</SmallItalic>
        <Spacer />

        {/* TODO This is really sloppy spacing. Figure out how to do this better. */}
        <BcpText>{'              '} The Word of the Lord.</BcpText>
        <BcpText>
          <SmallItalic>People</SmallItalic> {'   '} Thanks be to God.
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Or the Reader may say</SmallItalic>
          {'   '} Here ends the Lesson (Reading).
        </BcpText>
        <Spacer />

        <SmallItalic>
          Silence may be kept after each Reading. One of the following
          Canticles, or one of those on pages 47-52, or 85-95, is sung or said
          after each Reading. If three lessons are used, the Lesson from the
          Gospel is read after the second Canticle.
        </SmallItalic>
        <Spacer />

        <Spacer />

        <BcpText>
          <Bold>The Song of Mary</Bold>
          <Italic>{'   '} Magnificat</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>Luke 1:46-55</SmallItalic>
        <Spacer />

        <BcpText>
          My soul proclaims the greatness of the Lord,{'\n'}
          my spirit rejoices in God my Savior; *{'\n'}
          {'   '} for he has looked with favor on his lowly servant. {'\n'}
          From this day all generations will call me blessed: *{'\n'}
          {'   '} the Almighty has done great things for me,{'\n'}
          {'   '} and holy is his Name. {'\n'}
          He has mercy on those who fear him *{'\n'}
          {'   '} in every generation. {'\n'}
          He has shown the strength of his arm, *{'\n'}
          {'   '} he has scattered the proud in their conceit. {'\n'}
          He has cast down the mighty from their thrones, *{'\n'}
          {'   '} and has lifted up the lowly. {'\n'}
          He has filled the hungry with good things, *{'\n'}
          {'   '} and the rich he has sent away empty. {'\n'}
          He has come to the help of his servant Israel, *{'\n'}
          {'   '} for he has remembered his promise of mercy, {'\n'}
          The promise he made to our fathers, *{'\n'}
          {'   '} to Abraham and his children for ever. {'\n'}
          {'\n'}
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. Amen. {'\n'}
        </BcpText>
        <BcpText>
          <Bold>The Song of Simeon</Bold> <Italic>{'  '} Nunc Dimittis</Italic>
        </BcpText>
        <SmallItalic> Luke 2:29-32</SmallItalic>
        <Spacer />

        <BcpText>
          Lord, you now have set your servant free *{'\n'}
          {'    '}to go in peace as you have promised; {'\n'}
          For these eyes of mine have seen the Savior, *{'\n'}
          {'    '}whom you have prepared for all the world to see: {'\n'}A Light
          to enlighten the nations, *{'\n'}
          {'    '}and the glory of your people Israel. {'\n'}
          {'\n'}
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. Amen. {'\n'}
        </BcpText>
        <Spacer />

        <BcpText>
          <Bold>The Apostles' Creed</Bold>
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Officiant and People together, all standing</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          I believe in God, the Father almighty,{'\n'}
          {'    '}creator of heaven and earth. {'\n'}I believe in Jesus Christ,
          his only son, our Lord.{'\n'}
          {'    '}He was conceived by the power of the Holy Spirit{'\n'}
          {'      '}and born of the Virgin Mary.{'\n'}
          {'    '}He suffered under Pontius Pilate,{'\n'}
          {'      '}was crucified, died, and was buried.{'\n'}
          {'    '}He descended to the dead.{'\n'}
          {'    '}On the third day he rose again.{'\n'}
          {'    '}He ascended into heaven,{'\n'}
          {'      '}and is seated at the right hand of the Father.{'\n'}
          {'    '}He will come again to judge the living and the dead. {'\n'}I
          believe in the Holy Spirit,{'\n'}
          {'    '}the holy catholic Church,{'\n'}
          {'    '}the communion of saints,{'\n'}
          {'    '}the forgiveness of sins,{'\n'}
          {'    '}the resurrection of the body,{'\n'}
          {'    '}and the life everlasting. Amen. {'\n'}
        </BcpText>
        <Spacer />

        <SubTitle>The Prayers</SubTitle>
        <SmallItalic>The People stand or kneel</SmallItalic>
        <Spacer />

        <Officiant>The Lord be with you.</Officiant>
        <People>And also with you.</People>
        <Officiant>Let us pray.</Officiant>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <LordsPrayer />
        <Spacer />

        <SmallItalic>Then follows one of these sets of Suffrages</SmallItalic>
        <Spacer />

        <Bold>A</Bold>
        <Spacer />

        <BcpText>
          V.{'   '} Show us your mercy, O Lord; {'\n'}
          R.{'   '} And grant us your salvation. {'\n'}
          V.{'   '} Clothe your ministers with righteousness; {'\n'}
          R.{'   '} Let your people sing with joy. {'\n'}
          V.{'   '} Give peace, O Lord, in all the world; {'\n'}
          R.{'   '} For only in you can we live in safety. {'\n'}
          V.{'   '} Lord, keep this nation under your care; {'\n'}
          R.{'   '} And guide us in the way of justice and truth. {'\n'}
          V.{'   '} Let your way be known upon earth; {'\n'}
          R.{'   '} Your saving health among all nations. {'\n'}
          V.{'   '} Let not the needy, O Lord, be forgotten; {'\n'}
          R.{'   '} Nor the hope of the poor be taken away. {'\n'}
          V.{'   '} Create in us clean hearts, O God; {'\n'}
          R.{'   '} And sustain us by your Holy Spirit. {'\n'}
        </BcpText>
        <Bold>B</Bold>
        <Spacer />

        <BcpText>
          That this evening may be holy, good, and peaceful,
          <Italic>We entreat you, O Lord.</Italic> {'\n'}
          {'\n'}
          That your holy angels may lead us in paths of peace and goodwill,
          {'\n'}
          <Italic>We entreat you, O Lord.</Italic> {'\n'}
          {'\n'}
          That we may be pardoned and forgiven for our sins and offenses,{'\n'}
          <Italic>We entreat you, O Lord.</Italic> {'\n'}
          {'\n'}
          That there may be peace to your Church and to the whole world,{'\n'}
          <Italic>We entreat you, O Lord.</Italic> {'\n'}
          {'\n'}
          That we may depart this life in your faith and fear, and not be
          condemned before the great judgment seatd of Christ,{'\n'}
          <Italic>We entreat you, O Lord.</Italic> {'\n'}
          {'\n'}
          That we may be bound together by your Holy Spirit in the communion of
          [________ and] all your saints, entrusting one another and all our
          life to Christ,{'\n'}
          <Italic>We entreat you, O Lord.</Italic> {'\n'}
        </BcpText>
        <Spacer />

        <SmallItalic>
          The Officiant then says one or more of the following Collects
        </SmallItalic>
        <Spacer />

        <Italic>The Collect of the Day</Italic>
        <Spacer />

        <Italic>A Collect for Sundays</Italic>
        <Spacer />

        <BcpText>
          Lord God, whose Son our Savior Jesus Christ triumphed over the powers
          of death and prepared for us our place in the new Jerusalem: Grant
          that we, who have this day given thanks for his resurrection, may
          praise you in that City of which he is the light, and where he lives
          and reigns for ever and ever. <Italic>Amen.</Italic> {'\n'}
        </BcpText>
        <Spacer />

        <Italic>A Collect for Fridays</Italic>
        <Spacer />

        <BcpText>
          Lord Jesus Christ, by your death you took away the sting of death:
          Grant to us your servants so to follow in faith where you have led the
          way, that we may at length fall asleep peacefully in you and wake up
          in your likeness; for your tender mercies' sake.{' '}
          <Italic>Amen.</Italic> {'\n'}
        </BcpText>
        <Spacer />

        <Italic>A Collect for Saturdays</Italic>
        <Spacer />

        <BcpText>
          O God, the source of eternal light: Shed forth your unending day upon
          us who watch for you, that our lips may praise you, our lives may
          bless you, and our worship on the morrow give you glory; through Jesus
          Christ our Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>A Collect for Peace</Italic>
        <Spacer />

        <BcpText>
          Most holy God, the source of all good desires, all right judgements,
          and all just works: Give to us, your servants, that peace which the
          world cannot give, so that our minds may be fixed on the doing of your
          will, and that we, being delivered from the fear of all enemies, may
          live in peace and quietness; through the mercies of Christ Jesus our
          Savior. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>A Collect for Aid against Perils</Italic>
        <Spacer />

        <BcpText>
          Be our light in the darkness, O Lord, and in your great mercy defend
          us from all perils and dangers of this night; for the love of your
          only Son, our Savior Jesus Christ. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>A Collect for Protection</Italic>
        <Spacer />

        <BcpText>
          O God, the life of all who live, the light of the faithful, the
          strength of those who labor, and the repose of the dead: We thank you
          for the blessings of the day that is past, and humbly ask for your
          protection through the coming night. Bring us in safety to the morning
          hours; through him who died and rose again for us, your Son our Savior
          Jesus Christ.
          <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <Italic>A Collect for the Presence of Christ</Italic>
        <Spacer />
        <BcpText>
          Lord Jesus, stay with us, for evening is at hand and the day is past;
          be our companion in the way, kindle our hearts, and awaken hope, that
          we may know you as you are revealed in Scripture and the breaking of
          bread. Grant this for the sake of your love. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          Then, unless the Eucharist or a form of general intercession is to
          follow, one of these prayer for mission is added
        </SmallItalic>
        <Spacer />

        <BcpText>
          O God and Father of all, whom the whole heavens adore: Let the whole
          earth also worship you, all nations obey you, all tongues confess and
          bless you, and men and women everywhere love you and serve you in
          peace; through Jesus Christ our Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          Keep watch, dear Lord, with those who work, or watch, or weep this
          night, and give your angels charge over those who sleep. Tend the
          sick, Lord Christ; give rest to the weary, bless the dying, soothe the
          suffering, pity the afflicted, shield the joyous; and all for your
          love's sake. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>or the following</SmallItalic>
        <Spacer />

        <BcpText>
          O God, you manifest in your servants the signs of your presence: Send
          forth upon us the spirit of love, that in companionship with one
          another your abounding grace may increase among us; through Jesus
          Christ our Lord. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>Here may be sung a hymn or anthem.</SmallItalic>
        <Spacer />

        <SmallItalic>
          Authorized intercessions and thanksgivings may follow.
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          Before the close of the Office one or both of the following may be
          used
        </SmallItalic>
        <Spacer />

        <Italic>The General Thanksgiving</Italic>
        <Spacer />

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <BcpText>
          Almighty God, Father of all mercies,{'\n'}
          we your unworthy servants give you humble thanks{'\n'}
          for all your goodness and loving-kindness{'\n'}
          to us and to all whom you have made.{'\n'}
          We bless you for our creation, preservation,{'\n'}
          and all the blessings of this life;{'\n'}
          but above all for your immeasurable love{'\n'}
          in the redemption of the world by our Lord Jesus Christ;{'\n'}
          for the means of grace, and for the hope of glory.{'\n'}
          And, we pray, give us such an awareness of your mercies,{'\n'}
          that with truly thankful hearts we may show forth your praise,{'\n'}
          not only with our lips, but in our lives,{'\n'}
          by giving up our selves to your service,{'\n'}
          and by walking before you{'\n'}
          in holiness and righteousness all our days;{'\n'}
          through Jesus Christ our Lord, {'\n'}
          to whom, with you and the Holy Spirit,{'\n'}
          be honor and glory throughout all ages. Amen. {'\n'}
        </BcpText>
        <Spacer />

        <Italic>A Prayer of St. Chrysostom</Italic>
        <Spacer />
        <BcpText>
          Almighty God, you have given us grace at this time with one accord to
          make our common supplication to you; and you have promised through
          your well-beloved Son that when two or three are gathered together in
          his Name you will be in the midst of them: Fulfill now, O Lord, our
          desires and petitions as may be best for us; granting us in this world
          knowledge of your truth, and in the age to come life everlasting.{' '}
          <Italic>Amen.</Italic> {'\n'}
        </BcpText>
        <Spacer />

        <SmallItalic>Then may be said</SmallItalic>
        <Spacer />

        <SmallItalic>
          From Easter Day through the Day of Pentecost "Alleluia, alleluia" may
          be added to the preceding versicle and response.
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          The Officiant may then conclude with one of the following
        </SmallItalic>
        <Spacer />

        <BcpText>
          The grace of our Lord Jesus Christ, and the love of God, and the
          fellowship of the Holy Spirit, be with us all evermore.
          <Italic>Amen.</Italic>{' '}
          <SmallItalic>{'  '} 2 Corinthians 13:14</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          May the God of hope fill us with all joy and peace in{'\n'}
          believing through the power of the Holy Spirit. <Italic>
            Amen.
          </Italic>{' '}
          <SmallItalic>Romans 15:13</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Glory to God whose power, working in us, can do infinitely more than
          we can ask or imagine: Glory to him from generation to generation in
          the Church, and in Christ Jesus for ever and ever.{' '}
          <Italic>Amen.</Italic>
          <SmallItalic>{'  '} Ephesians 3:20,21</SmallItalic>
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

export default Compline;
