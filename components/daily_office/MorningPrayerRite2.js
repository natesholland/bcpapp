/**
 * Daily Devotions
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';

import Italic from '../shared/Italic';
import SubTitle from '../shared/SubTitle';
import Bold from '../shared/Bold';
import Title from '../shared/Title';
import SmallItalic from '../shared/SmallItalic';
import BcpText from '../shared/BcpText';
import Spacer from '../shared/Spacer';
import SmallBcpText from '../shared/SmallBcpText';
import Collapsible from 'react-native-collapsible';
import Officiant from '../shared/Officiant';
import People from '../shared/People';

import Canticle8 from '../canticles/Canticle8';
import Canticle9 from '../canticles/Canticle9';

const MorningPrayerRite2 = ({navigation, name}) => {
  const [collapsedCanticle8, changeCollapsedCanticle8] = useState(true);
  const [collapsedCanticle9, changeCollapsedCanticle9] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Title>Daily Morning Prayer: Rite Two</Title>

        <SmallItalic>
          The Officiant begins the service with one or more of these sentences
          of {'\n'}
          Scripture, or with the versicle "Lord, open our lips" on page 80.
        </SmallItalic>
        <Spacer />

        <Italic>Advent</Italic>
        <Spacer />
        <BcpText>
          Watch , for you know not when the master of the house will come, in
          the evening, or at midnight, or at cockcrow, or in the morning; lest
          he come suddenly and find you asleep.
          <SmallItalic>Mark 13:35, 36</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          In the wilderness prepare the way of the Lord, make straight in the
          desert a highway for our God.{'    '}
          <SmallItalic>Isaiah 40:3</SmallItalic>{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          The glory of the Lord shall be revealed, and all flesh shall see it
          together.{'    '}
          <SmallItalic>Isaiah 40:5</SmallItalic> {'\n'}
        </BcpText>
        <Spacer />

        <Italic>Christmas</Italic>
        <Spacer />
        <BcpText>
          Behold, I bring you good news of a great joy, which will come to all
          the people; for unto you is born this day in the city of David, a
          Savior, who is Christ the Lord.{'    '}
          <SmallItalic>Luke 2:10, 11</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Behold, the dwelling of God is with mankind. He will dwell with them,
          and they shall be his people, and God himself will be with them, and
          be their God.{'    '}
          <SmallItalic>Revelation 21:3</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>Epiphany</Italic>
        <Spacer />

        <BcpText>
          Nations shall come to your light, and kings to the brightness of your
          rising.{'    '}
          <SmallItalic>Isaiah 60:3</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          I will give you as a light to the nations, that my salvation may reach
          to the end of the earth.{'    '}
          <SmallItalic>Isaiah 49:6b </SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          From the rising of the sun to its setting my Name shall be great among
          the nations, and in every place incense shall be offered to my Name,
          and a pure offering: for my Name shall be great among the nations,
          says the Lord of hosts.{'    '}
          <SmallItalic>Malachi 1:11</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>Lent</Italic>
        <Spacer />

        <BcpText>
          If we say we have no sin, we deceive ourselves, and the truth is not
          in us; but if we confess our sins, God who is faithful and just, will
          forgive our sins and cleanse us from all unrighteousness.{'    '}
          <SmallItalic>I John 1:8, 9</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Rend your hearts and not your garments. Return to the Lord your God,
          for he is gracious and merciful, slow to anger and abounding in
          steadfast love, and repents of evil. {'    '}
          <SmallItalic>Joel 2:13</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          I will arise and go to my father, and I will say to him, "Father, I
          have sinned against heaven, and before you; I am no longer worthy to
          be called your son."{'    '}
          <SmallItalic>Luke 15:18, 19</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          To the Lord our God belong mercy and forgiveness, because we have
          rebelled against him and have not obeyed the voice of the Lord our God
          by following his laws which he set before us.{'    '}
          <SmallItalic>Daniel 9:9, 10</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Jesus said, "If anyone will come after me, let him deny himself, and
          take up his cross, and follow me."{'    '}
          <SmallItalic>Mark 8:34</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>Holy Week </Italic>
        <Spacer />

        <BcpText>
          All we like sheep have gone astray; we have turned every one to his
          own way; and the Lord has laid on him the iniquity of us all.{'    '}
          <SmallItalic>Isaiah 53:6</SmallItalic>{' '}
        </BcpText>

        <BcpText>
          Is it nothing to you, all you who pass by? Look and see if there is
          any sorrow like my sorrow which was brought upon me, whom the Lord
          hath afflicted.{'    '}
          <SmallItalic>Lamentations 1:12</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>
          Easter Season, including Ascension Day and the Day of Pentecost
        </Italic>

        <BcpText>
          Alleluia! Christ is risen. {'\n'}
          <Italic>The Lord is risen indeed. Alleluia!</Italic>{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          On this day the Lord has acted; we will rejoice and be glad in it.
          {'    '}
          <SmallItalic>Psalm 118:24</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Thanks be to God, who gives us the victory through our Lord Jesus
          Christ.{'    '}
          <SmallItalic>1 Corinthians 15:57</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          If then you have been raised with Christ, seek the things that are
          above, where Christ is, seated at the right hand of God.
          <SmallItalic>Colossians 3:1</SmallItalic>{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          Christ has entered, not into a sanctuary made with hands, a copy of
          the true one, but into heaven itself, now to appear in the presence of
          God on our behalf.{'    '}
          <SmallItalic>Hebrews 9:24 </SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          You shall receive power when the Holy Ghost has come upon you; and you
          shall be my witness in Jerusalem, and in all Judea, and Samaria, and
          to the ends of the earth.
          {'   '}
          <SmallItalic>Acts 1::8</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>Trinity Sunday</Italic>
        <Spacer />

        <BcpText>
          Holy, holy, holy is the Lord God Almighty, who was, and is, and is to
          come.{'    '}
          <SmallItalic>Revelation 4:8</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>All Saints and other Major Saints' Days</Italic>
        <Spacer />

        <BcpText>
          We give thanks to the Father, who has made us worthy to share in the
          inheritance of the saints in light.
          {'   '}
          <SmallItalic>Colossians 1:12</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          You are no longer strangers and sojourners, but fellow citizens with
          the saints and members of the household of God.{'    '}
          <SmallItalic>Ephesians 2:19</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Their sound has gone out into all lands, and their message to the ends
          of the world.{'    '}
          <SmallItalic>Psalm 19:4</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>Occasions of Thanksgiving </Italic>
        <Spacer />

        <BcpText>
          O give thanks to the Lord, and call upon his Name; make known his
          deeds among the peoples.{'    '}
          <SmallItalic>Psalm 105:1</SmallItalic>
        </BcpText>
        <Spacer />

        <Italic>At any Time </Italic>
        <Spacer />

        <BcpText>
          Grace to you and peace from God our Father and from the Lord Jesus
          Christ.{'    '}
          <SmallItalic>Philippians 1:2</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          I was glad when they said to me, "Let us go to the house of the Lord."
          {'    '}
          <SmallItalic>Psalm 122:1</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Let the words of my mouth and the meditation of my heart be acceptable
          in your sight, O Lord, my strength and my redeemer.{'    '}
          <SmallItalic>Psalm 19:14</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Send out your light and your truth, that they may lead me, and bring
          me to your holy hill and to your dwelling.
          <SmallItalic>Psalm 43:3</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          The Lord is in his holy temple; let all the earth keep silence before
          him.{'    '}
          <SmallItalic>Habakkuk 2:20</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          The hour is coming, and now is, when the true worshipers will worship
          the Father in spirit and in truth, for such the Father seeks to
          worship him.{'    '}
          <SmallItalic>John 4:23</SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Thus says the high and lofty One who inhabits eternity, whose name is
          Holy, "I dwell in the high and holy place and also with the one who
          has a contrite and humble spirit, to revive the spirit of the humble
          and to revive the heart of the contrite."{'    '}
          <SmallItalic>Isaiah 57:15</SmallItalic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          The following Confession of Sin may then be said; or the Office may
          continue at once with "Lord, open our lips."
        </SmallItalic>
        <Spacer />

        <Bold>Confession of Sin</Bold>
        <Spacer />

        <SmallItalic>The Officiant says to the people</SmallItalic>
        <Spacer />

        <BcpText>
          Dearly beloved, we have come together in the presence of Almighty God
          our heavenly Father, to set forth his praise, to hear his holy Word,
          and to ask, for ourselves and on behalf of others, those things that
          are necessary for our life and our salvation. And so that we may
          prepare ourselves in heart and mind to worship him, let us kneel in
          silence, and with penitent and obedient hearts confess our sins, that
          we may obtain forgiveness by his infinite goodness and mercy.
        </BcpText>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>Let us confess our sins against God and our neighbor.</BcpText>
        <Spacer />

        <SmallItalic>Silence may be kept.</SmallItalic>
        <Spacer />

        <SmallItalic>Officiant and People together, all kneeling</SmallItalic>
        <Spacer />

        <BcpText>
          Most merciful God, {'\n'}
          we confess that we have sinned against you {'\n'}
          in thought, word, and deed, {'\n'}
          by what we have done, {'\n'}
          and by what we have left undone. {'\n'}
          We have not loved you with our whole heart; {'\n'}
          we have not loved our neighbors as ourselves. {'\n'}
          We are truly sorry and we humbly repent. {'\n'}
          For the sake of your Son Jesus Christ, {'\n'}
          have mercy on us and forgive us; {'\n'}
          that we may delight in your will, {'\n'}
          and walk in your ways, {'\n'}
          to the glory of your Name. Amen.{' '}
        </BcpText>
        <Spacer />

        <SmallItalic>The Priest alone stands and says</SmallItalic>
        <Spacer />

        <BcpText>
          Almighty God have mercy on you, forgive you all your sins through our
          Lord Jesus Christ, strengthen you in all goodness, and by the power of
          the Holy Spirit keep you in eternal life. <Italic>Amen.</Italic>
        </BcpText>
        <Spacer />

        <SmallItalic>
          A deacon or lay person using the preceding form remains kneeling, and
          substitutes "us" for "you" and "our" for "your."
        </SmallItalic>
        <Spacer />

        <SubTitle>The Invitatory and Psalter</SubTitle>
        <Spacer />

        <SmallItalic>All stand</SmallItalic>
        <Spacer />

        <Officiant>Lord, open our lips.</Officiant>
        <People>And our mouth shall proclaim your praise.</People>

        <SmallItalic>Officiant and People</SmallItalic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. Amen.{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          <SmallItalic>Except in Lent, add</SmallItalic>
          {'    '}Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>
          Then follows one of the Invitatory Psalms, Venite or Jubilate.
        </SmallItalic>
        <Spacer />

        <SmallItalic>
          One of the following Antiphons may be sung or said with the Invitatory
          Psalm
        </SmallItalic>
        <Spacer />

        {/* TODO it could be cool to conditionally render these based on the season. */}
        <SmallItalic>In Advent</SmallItalic>
        <Spacer />

        <BcpText>
          Our King and Savior now draws near: Come, let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>On the Twelve Days of Christmas</SmallItalic>
        <Spacer />

        <BcpText>
          Alleluia. To us a child is born: O come, let us adore him. Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>
          From the Epiphany through the Baptism of Christ, and on the Feasts of
          the Transfiguration and Holy Cross
        </SmallItalic>
        <Spacer />

        <BcpText>
          The Lord has shown forth his glory: Come let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>In Lent</SmallItalic>
        <Spacer />

        <BcpText>
          The Lord is full of compassion and mercy: Come let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>From Easter Day until the Ascension</SmallItalic>
        <Spacer />

        <BcpText>
          Alleluia. The Lord is risen indeed: Come let us adore him. Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>From Ascension Day until the Day of Pentecost</SmallItalic>
        <Spacer />

        <BcpText>
          Alleluia. Christ the Lord has ascended into heaven: Come let us adore
          him. Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>On the Day of Pentecost</SmallItalic>
        <Spacer />

        <BcpText>
          Alleluia. The Spirit of the Lord renews the face of the earth: Come
          let us adore him. Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>On Trinity Sunday</SmallItalic>
        <Spacer />

        <BcpText>
          Father, Son, and Holy Spirit, one God: Come let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>On other Sundays and weekdays</SmallItalic>
        <Spacer />

        <BcpText>
          The earth is the Lord's for he made it: Come let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          Worship the Lord in the beauty of holiness: Come let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>or this</SmallItalic>
        <Spacer />

        <BcpText>
          The mercy of the Lord is everlasting: Come let us adore him.
        </BcpText>
        <Spacer />

        <SmallItalic>
          The Alleluias in the following Antiphons are used only in Easter
          Season.
        </SmallItalic>
        <Spacer />

        <SmallItalic>On Feasts of the Incarnation</SmallItalic>
        <Spacer />

        <BcpText>
          [Alleluia.] The Word was made flesh and dwelt among us: Come, let us
          adore him. [Alleluia.] {'\n'}
        </BcpText>
        <Spacer />

        <SmallItalic>On All Saints and other Major Saints' Days</SmallItalic>
        <Spacer />

        <BcpText>
          [Alleluia.] The Lord is glorious in his saints: Come, let us adore
          him. [Alleluia.]
        </BcpText>
        <Spacer />

        <BcpText>
          <Bold>Venite</Bold>
          {'     '}
          <SmallItalic>Psalm 95:1-7</SmallItalic>{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          Come, let us sing to the Lord; * {'\n'}
          {'    '}let us shout for joy to the Rock of our salvation. {'\n'}
          Let us come before his presence with thanksgiving * {'\n'}
          {'    '}and raise a loud shout to him with psalms.{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          For the Lord is a great God, * {'\n'}
          {'    '}and a great King above all gods. {'\n'}
          In his hand are the caverns of the earth, * {'\n'}
          {'    '}and the heights of the hills are his also. {'\n'}
          The sea is his, for he made it, * {'\n'}
          {'    '}and his hands have molded the dry land.
        </BcpText>
        <Spacer />

        <BcpText>
          Come, let us bow down, and bend the knee, * {'\n'}
          {'    '}and kneel before the Lord our Maker. {'\n'}
          For he is our God, {'\n'}
          and we are the people of his pasture and the sheep of his hand. *
          {'\n'}
          {'    '}Oh, that today you would hearken to his voice!
        </BcpText>
        <Spacer />

        <SmallItalic>or Psalm 95, page 724</SmallItalic>
        <Spacer />

        <BcpText>
          <Bold>Jubilate</Bold> {'     '}
          <SmallItalic>Psalm 100</SmallItalic>{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          Be joyful in the Lord, all you lands; * {'\n'}
          {'    '}serve the Lord with gladness {'\n'}
          {'    '}and come before his presence with a song.{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          Know this: The Lord himself is God; * {'\n'}
          {'    '}he himself has made us, and we are his; {'\n'}
          {'    '}we are his people and the sheep of his pasture.
        </BcpText>
        <Spacer />

        <BcpText>
          Enter his gates with thanksgiving; {'\n'}
          go into his courts with praise; * {'\n'}
          {'    '}give thanks to him and call upon his Name.{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          For the Lord is good; {'\n'}
          his mercy is everlasting; * {'\n'}
          {'    '}and his faithfulness endures from age to age.{' '}
        </BcpText>
        <Spacer />

        <SmallItalic>
          In Easter Week, in place of an Invitatory Psalm, the following is sung
          or said. It may also be used daily until the Day of Pentecost.
        </SmallItalic>
        <Spacer />

        <BcpText>
          <Bold>Christ our Passover</Bold>
          {'     '}
          <SmallItalic>
            Pascha nostrum{'\n'}1 Corinthians 5:7-8; Romans 6:9-11; 1
            Corinthians 15:20-22{' '}
          </SmallItalic>
        </BcpText>
        <Spacer />

        <BcpText>
          Alleluia. {'\n'}
          Christ our Passover has been sacrificed for us; * {'\n'}
          {'    '}therefore let us keep the feast, {'\n'}
          Not with old leaven, the leaven of malice and evil, * {'\n'}
          {'    '}but with the unleavened bread of sincerity and truth.
          Alleluia.{' '}
        </BcpText>
        <Spacer />

        <BcpText>
          Christ being raised from the dead will never die again; * {'\n'}
          {'    '}death no longer has dominion over him. {'\n'}
          The death that he died, he died to sin, once for all; * {'\n'}
          {'    '}but the life he lives, he lives to God. {'\n'}
          So also consider yourselves dead to sin, * {'\n'}
          {'    '}and alive to God in Jesus Christ our Lord. Alleluia.
        </BcpText>
        <Spacer />

        <BcpText>
          Christ has been raised from the dead, * {'\n'}
          {'    '}the first fruits of those who have fallen asleep. {'\n'}
          For since by a man came death, * {'\n'}
          {'    '}by a man has come also the resurrection of the dead. {'\n'}
          For as in Adam all die, * {'\n'}
          {'    '}so in Christ shall all be made alive. Alleluia.
        </BcpText>
        <Spacer />

        <SmallItalic>Then follows</SmallItalic>
        <Spacer />

        <BcpText>
          <Bold>The Psalm or Psalms Appointed</Bold>{' '}
        </BcpText>
        <Spacer />

        <SmallItalic>At the end of the Psalms is sung or said</SmallItalic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: as it was
          in the beginning, is now, and will be for ever. Amen.
        </BcpText>
        <Spacer />

        <SubTitle>The Lessons</SubTitle>
        <Spacer />

        <SmallItalic>
          One or two lessons, as appointed, are read, the Reader first saying
        </SmallItalic>
        <Spacer />

        <BcpText>A Reading (Lesson) from _______________. </BcpText>
        <Spacer />

        <SmallItalic>
          A citation giving chapter and verse may be added.
        </SmallItalic>
        <Spacer />

        <SmallItalic>After each Lesson the Reader may say</SmallItalic>
        <Spacer />

        <BcpText> {'             '}The Word of the Lord.</BcpText>
        <People>Thanks be to God.</People>
        <Spacer />

        <BcpText>
          <SmallItalic>Or the Reader may say</SmallItalic>
          {'    '}Here ends the Lesson (Reading).
        </BcpText>
        <Spacer />

        <SmallItalic>
          Silence may be kept after each Reading. One of the following
          Canticles, or one of those on pages 47-52 (Canticles 1-7), is sung or
          said after each Reading. If three Lessons are used, the Lesson from
          the Gospel is read after the second Canticle.
        </SmallItalic>
        <Spacer />

        <Button
          title={'8 The Song of Moses'}
          onPress={() => changeCollapsedCanticle8(!collapsedCanticle8)}
        />
        <Collapsible collapsed={collapsedCanticle8}>
          <Canticle8 />
        </Collapsible>
        <Button
          title={'9 The First Song of Isaiah'}
          onPress={() => changeCollapsedCanticle9(!collapsedCanticle9)}
        />
        <Collapsible collapsed={collapsedCanticle9}>
          <Canticle9 />
        </Collapsible>
        {/* 




<BcpText>{'\n'}
<strong class="x-large">10</Bold>{'    '}<Bold>The Second Song of Isaiah</Bold>{'       '}{' '}<Italic>Quaerite Dominum</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Isaiah 55:6-11</SmallItalic> </BcpText>

<BcpText>Seek the Lord while he wills to be found; * {'\n'}
{'    '}call upon him when he draws near. {'\n'}
Let the wicked forsake their ways * {'\n'}
{'    '}and the evil ones their thoughts; {'\n'}
And let them turn to the Lord, and he will have compassion, * {'\n'}
{'    '}and to our God, for he will richly pardon. {'\n'}
For my thoughts are not your thoughts, * {'\n'}
{'    '}nor your ways my ways, says the Lord. {'\n'}
For as the heavens are higher than the earth, * {'\n'}
{'    '}so are my ways higher than your ways, {'\n'}
{'    '}and my thoughts than your thoughts. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>For as rain and snow fall from the heavens * {'\n'}
{'    '}and return not again, but water the earth, {'\n'}
Bringing forth life and giving growth, * {'\n'}
{'    '}seed for sowing and bread for eating, {'\n'}
So is my word that goes forth from my mouth; * {'\n'}
{'    '}it will not return to me empty; {'\n'}
But it will accomplish that which I have purposed, * {'\n'}
{'    '}and prosper in that for which I sent it. </BcpText>

<BcpText>Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
{'    '}as it was in the beginning, is now, and will be for ever. Amen. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">11</Bold>{'    '}<Bold>The Third Song of Isaiah</Bold>{'    '}<Italic>Surge, illuminare</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Isaiah 60:1-3, 11a, 14c, 18-19</SmallItalic> </BcpText>

<BcpText>Arise, shine, for your light has come, * {'\n'}
{'    '}and the glory of the Lord has dawned upon you.{'\n'}
For behold, darkness covers the land; * {'\n'}
{'    '}deep gloom enshrouds the peoples. {'\n'}
But over you the Lord will rise, * {'\n'}
{'    '}and his glory will appear upon you. {'\n'}
Nations will stream to your light, * {'\n'}
{'    '}and kings to the brightness of your dawning. {'\n'}
Your gates will always be open; * {'\n'}
{'    '}by day or night they will never be shut. {'\n'}
They will call you, The City of the Lord, * {'\n'}
{'    '}The Zion of the Holy One of Israel. {'\n'}
Violence will no more be heard in your land, * {'\n'}
{'    '}ruin or destruction within your borders. {'\n'}
You will call your walls, Salvation, * {'\n'}
{'    '}and all your portals, Praise. {'\n'}
The sun will no more be your light by day; * {'\n'}
{'    '}by night you will not need the brightness of the moon.</BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>The Lord will be your everlasting light, * {'\n'}
{'    '}and your God will be your glory. </BcpText>

<BcpText>Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
{'    '}as it was in the beginning, is now, and will be for ever. Amen. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">12</Bold>{'    '}<Bold>A Song of Creation</Bold>{'    '}<Italic>Benedicite, omnia opera Domini</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Song of the Three Young Men, 35-65 </SmallItalic></BcpText>

<p class="rubric">One or more sections of this Canticle may be used. Whatever the {'\n'}
selection, it begins with the Invocation and concludes with the Doxology.</em></BcpText>

<BcpText><Italic>Invocation </Italic></BcpText>

<BcpText>Glorify the Lord, all you works of the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. {'\n'}
In the firmament of his power, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText><Italic>I{'    '}The Cosmic Order</Italic> </BcpText>

<BcpText>Glorify the Lord, you angels and all powers of the Lord, * {'\n'}
{'    '}O heavens and all waters above the heavens. {'\n'}
Sun and moon and stars of the sky, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText>Glorify the Lord, every shower of rain and fall of dew, * {'\n'}
{'    '}all winds and fire and heat. {'\n'}
Winter and Summer, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText>Glorify the Lord, O chill and cold, * {'\n'}
drops of dew and flakes of snow. {'\n'}
Frost and cold, ice and sleet, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>Glorify the Lord, O nights and days, * {'\n'}
{'    '}O shining light and enfolding dark. {'\n'}
Storm clouds and thunderbolts, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText><Italic>II{'    '}The Earth and its Creatures</Italic></BcpText>

<BcpText>Let the earth glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. {'\n'}
Glorify the Lord, O mountains and hills, {'\n'}
and all that grows upon the earth, * {'\n'}
{'    '}praise him and highly exalt him for ever.</BcpText>

<BcpText>Glorify the Lord, O springs of water, seas, and streams, * {'\n'}
{'    '}O whales and all that move in the waters. {'\n'}
All birds of the air, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever.</BcpText>

<BcpText>Glorify the Lord, O beasts of the wild, * {'\n'}
{'    '}and all you flocks and herds. {'\n'}
O men and women everywhere, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText><Italic>III{'    '}The People of God</Italic></BcpText>

<BcpText>Let the people of God glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. {'\n'}
Glorify the Lord, O priests and servants of the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText>Glorify the Lord, O spirits and souls of the righteous, * {'\n'}
{'    '}praise him and highly exalt him for ever. {'\n'}
You that are holy and humble of heart, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText><Italic>Doxology</Italic></BcpText>

<BcpText>Let us glorify the Lord: Father, Son, and Holy Spirit; * {'\n'}
{'    '}praise him and highly exalt him for ever. {'\n'}
In the firmament of his power, glorify the Lord, * {'\n'}
{'    '}praise him and highly exalt him for ever. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">13</Bold>{'    '}<Bold>A Song of Praise</Bold>{'    '}<Italic>Benedictus es, Domine</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Song of the Three Young Men, 29-34</SmallItalic> </BcpText>

<BcpText>Glory to you, Lord God of our fathers; * {'\n'}
{'    '}you are worthy of praise; glory to you. {'\n'}
Glory to you for the radiance of your holy Name; * {'\n'}
{'    '}we will praise you and highly exalt you for ever.</BcpText>

<BcpText>Glory to you in the splendor of your temple; * {'\n'}
{'    '}on the throne of your majesty, glory to you. {'\n'}
Glory to you, seated between the Cherubim; * {'\n'}
{'    '}we will praise you and highly exalt you for ever.</BcpText>

<BcpText>Glory to you, beholding the depths; * {'\n'}
{'    '}in the high vault of heaven, glory to you. {'\n'}
Glory to you, Father, Son, and Holy Spirit; * {'\n'}
{'    '}we will praise you and highly exalt you for ever.{'\n'}
</BcpText>

<BcpText>{'\n'}
<strong class="x-large">14</Bold>{'    '}<Bold>A Song of Penitence</Bold>{'    '}<Italic>Kyrie Pantokrator</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Prayer of Manasseh 1-2, 4, 6-7, 11-15 </SmallItalic></BcpText>

<SmallItalic>Especially suitable in Lent, and on other penitential occasions </em></SmallItalic>

<BcpText>O Lord and Ruler of the hosts of heaven, * {'\n'}
{'    '}God of Abraham, Isaac, and Jacob, {'\n'}
{'    '}and of all their righteous offspring: {'\n'}
You made the heavens and the earth, * {'\n'}
{'    '}with all their vast array. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>All things quake with fear at your presence; * {'\n'}
{'    '}they tremble because of your power. {'\n'}
But your merciful promise is beyond all measure; * {'\n'}
{'    '}it surpasses all that our minds can fathom. {'\n'}
O Lord, you are full of compassion, * {'\n'}
{'    '}long-suffering, and abounding in mercy. {'\n'}
You hold back your hand; * {'\n'}
{'    '}you do not punish as we deserve. {'\n'}
In your great goodness, Lord, {'\n'}
you have promised forgiveness to sinners, * {'\n'}
{'    '}that they may repent of their sin and be saved. {'\n'}
And now, O Lord, I bend the knee of my heart, * {'\n'}
{'    '}and make my appeal, sure of your gracious goodness. {'\n'}
I have sinned, O Lord, I have sinned, * {'\n'}
{'    '}and I know my wickedness only too well. {'\n'}
Therefore I make this prayer to you: * {'\n'}
{'    '}Forgive me, Lord, forgive me. {'\n'}
Do not let me perish in my sin, * {'\n'}
{'    '}nor condemn me to the depths of the earth. {'\n'}
For you, O Lord, are the God of those who repent, * {'\n'}
{'    '}and in me you will show forth your goodness. {'\n'}
Unworthy as I am, you will save me, {'\n'}
in accordance with your great mercy, * {'\n'}
{'    '}and I will praise you without ceasing all the days of my life. {'\n'}
For all the powers of heaven sing your praises, * {'\n'}
{'    '}and yours is the glory to ages of ages. Amen.</BcpText>

<BcpText>{'\n'}
<strong class="x-large">15</Bold>{'    '}<Bold>The Song of Mary</Bold>{'    '}<Italic>Magnificat</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Luke 1:46-55 </SmallItalic></BcpText>

<BcpText>My soul proclaims the greatness of the Lord, {'\n'}
my spirit rejoices in God my Savior; * {'\n'}
{'    '}for he has looked with favor on his lowly servant.</BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>From this day all generations will call me blessed: * {'\n'}
{'    '}the Almighty has done great things for me, {'\n'}
{'    '}and holy is his Name. {'\n'}
He has mercy on those who fear him * {'\n'}
{'    '}in every generation. {'\n'}
He has shown the strength of his arm, * {'\n'}
{'    '}he has scattered the proud in their conceit. {'\n'}
He has cast down the mighty from their thrones, *{'\n'}
{'    '}and has lifted up the lowly. {'\n'}
He has filled the hungry with good things, * {'\n'}
{'    '}and the rich he has sent away empty. {'\n'}
He has come to the help of his servant Israel, * {'\n'}
{'    '}for he has remembered his promise of mercy, {'\n'}
The promise he made to our fathers, * {'\n'}
{'    '}to Abraham and his children for ever. </BcpText>

<BcpText>Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
{'    '}as it was in the beginning, is now, and will be for ever. Amen. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">16</Bold>{'    '}<Bold>The Song of Zechariah</Bold>{'    '}<Italic>Benedictus Dominus Deus</Italic>{'\n'}
{'       '}{'   '}<SmallItalic>Luke 1: 68-79 </SmallItalic></BcpText>

<BcpText>Blessed be the Lord, the God of Israel; * {'\n'}
{'    '}he has come to his people and set them free. {'\n'}
He has raised up for us a mighty savior, * {'\n'}
{'    '}born of the house of his servant David. {'\n'}
Through his holy prophets he promised of old, {'\n'}
that he would save us from our enemies, * {'\n'}
{'    '}from the hands of all who hate us. {'\n'}
He promised to show mercy to our fathers * {'\n'}
{'    '}and to remember his holy covenant. {'\n'}
This was the oath he swore to our father Abraham, * {'\n'}
{'    '}to set us free from the hands of our enemies, {'\n'}
Free to worship him without fear, * {'\n'}
{'    '}holy and righteous in his sight {'\n'}
{'    '}all the days of our life. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>You, my child, shall be called the prophet of the Most High, * {'\n'}
{'    '}for you will go before the Lord to prepare his way, {'\n'}
To give his people knowledge of salvation * {'\n'}
{'    '}by the forgiveness of their sins. {'\n'}
In the tender compassion of our God * {'\n'}
{'    '}the dawn from on high shall break upon us, {'\n'}
To shine on those who dwell in darkness and the {'\n'}
{'       '}{'       '}{'       '}{'       '}{' '}shadow of death, * {'\n'}
{'    '}and to guide our feet into the way of peace. </BcpText>

<BcpText>Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
{'    '}as it was in the beginning, is now, and will be for ever. Amen. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">17</Bold>{'    '}<Bold>The Song of Simeon</Bold>{'    '}<Italic>Nunc Dimittis</Italic>{'\n'}
{'       '}{'   '}<SmallItalic>Luke 2:29-32 </SmallItalic></BcpText>

<BcpText>Lord, you now have set your servant free * {'\n'}
{'    '}to go in peace as you have promised; {'\n'}
For these eyes of mine have seen the Savior, * {'\n'}
{'    '}whom you have prepared for all the world to see: {'\n'}
A Light to enlighten the nations, * {'\n'}
{'    '}and the glory of your people Israel. </BcpText>

<BcpText>Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
{'    '}as it was in the beginning, is now, and will be for ever. Amen. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">18</Bold>{'    '}<Bold>A Song to the Lamb</Bold>{'    '}<Italic>Dignus es</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Revelation 4:11, 5:9-10, 13</SmallItalic></BcpText>

<BcpText>Splendor and honor and kingly power * {'\n'}
{'    '}are yours by right, O Lord our God, {'\n'}
For you created everything that is, * {'\n'}
{'    '}and by your will they were created and have their being; </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>And yours by right, O Lamb that was slain, * {'\n'}
{'    '}for with your blood you have redeemed for God, {'\n'}
From every family, language, people, and nation, * {'\n'}
{'    '}a kingdom of priests to serve our God. </BcpText>

<BcpText>And so, to him who sits upon the throne, * {'\n'}
{'    '}and to Christ the Lamb, {'\n'}
Be worship and praise, dominion and splendor, * {'\n'}
{'    '}for ever and for evermore. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">19</Bold>{'    '}<Bold>The Song of the Redeemed</Bold>{'    '}<Italic>Magna et mirabilia</Italic> {'\n'}
{'       '}{'   '}<SmallItalic>Revelation 15:3-4 </SmallItalic></BcpText>

<BcpText>O ruler of the universe, Lord God, {'\n'}
great deeds are they that you have done, * {'\n'}
{'    '}surpassing human understanding. {'\n'}
Your ways are ways of righteousness and truth, * {'\n'}
O King of all the ages. </BcpText>

<BcpText>Who can fail to do you homage, Lord, {'\n'}
and sing the praises of your Name? * {'\n'}
{'    '}for you only are the Holy One. {'\n'}
All nations will draw near and fall down before you, * {'\n'}
{'    '}because your just and holy works have been revealed.</BcpText>

<BcpText>Glory to the Father, and to the Son, and to the Holy Spirit: * {'\n'}
{'    '}as it was in the beginning, is now, and will be for ever. Amen. </BcpText>

<BcpText>{'\n'}
<strong class="x-large">20</Bold>{'    '}<Bold>Glory to God</Bold>{'    '}<Italic>Gloria in excelsis</Italic> </BcpText>

<BcpText>Glory to God in the highest, {'\n'}
{'    '}and peace to his people on earth. </BcpText>

<BcpText>Lord God, heavenly King, {'\n'}
almighty God and Father, </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>{'    '}we worship you, we give you thanks, {'\n'}
{'    '}we praise you for your glory. </BcpText>

<BcpText>Lord Jesus Christ, only Son of the Father, {'\n'}
Lord God, Lamb of God, {'\n'}
you take away the sin of the world: {'\n'}
{'    '}have mercy on us; {'\n'}
you are seated at the right hand of the Father: {'\n'}
{'    '}receive our prayer. </BcpText>

<BcpText>For you alone are the Holy One, {'\n'}
you alone are the Lord, {'\n'}
you alone are the Most High,{'\n'}
{'    '}Jesus Christ, {'\n'}
{'    '}with the Holy Spirit, {'\n'}
{'    '}in the glory of God the Father. Amen.</BcpText>

<BcpText>{'\n'}
<strong class="x-large">21</Bold>{'    '}<Bold>You are God</Bold>{'   '}<Italic>Te Deum laudamus</Italic> </BcpText>

<BcpText>You are God: we praise you; {'\n'}
You are the Lord; we acclaim you; {'\n'}
You are the eternal Father: {'\n'}
All creation worships you. {'\n'}
To you all angels, all the powers of heaven, {'\n'}
Cherubim and Seraphim, sing in endless praise: {'\n'}
{'    '}Holy, holy, holy Lord, God of power and might,{'\n'}
{'    '}heaven and earth are full of your glory. {'\n'}
The glorious company of apostles praise you. {'\n'}
The noble fellowship of prophets praise you. {'\n'}
The white-robed army of martyrs praise you. {'\n'}
Throughout the world the holy Church acclaims you; {'\n'}
{'    '}Father, of majesty unbounded, {'\n'}
{'    '}your true and only Son, worthy of all worship,{'\n'}
{'    '}and the Holy Spirit, advocate and guide. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>You, Christ, are the king of glory, {'\n'}
the eternal Son of the Father. {'\n'}
When you became man to set us free {'\n'}
you did not shun the Virgin's womb. {'\n'}
You overcame the sting of death {'\n'}
and opened the kingdom of heaven to all believers. {'\n'}
You are seated at God's right hand in glory. {'\n'}
We believe that you will come and be our judge. {'\n'}
{'    '}Come then, Lord, and help your people, {'\n'}
{'    '}bought with the price of your own blood, {'\n'}
{'    '}and bring us with your saints {'\n'}
{'    '}to glory everlasting. </BcpText>

<BcpText>{'\n'}
<a name=acreed><Bold>The Apostles' Creed</Bold></a></BcpText>

<SmallItalic>Officiant and People together, all standing</SmallItalic>

<BcpText>I believe in God, the Father almighty, {'\n'}
{'    '}creator of heaven and earth; {'\n'}
I believe in Jesus Christ, his only Son, our Lord. {'\n'}
{'    '}He was conceived by the power of the Holy Spirit {'\n'}
{'       '}{' '}and born of the Virgin Mary. {'\n'}
{'    '}He suffered under Pontius Pilate, {'\n'}
{'       '}{' '}was crucified, died, and was buried. {'\n'}
{'    '}He descended to the dead. {'\n'}
{'    '}On the third day he rose again. {'\n'}
{'    '}He ascended into heaven, {'\n'}
{'       '}{' '}and is seated at the right hand of the Father. {'\n'}
{'    '}He will come again to judge the living and the dead. {'\n'}
I believe in the Holy Spirit, {'\n'}
{'    '}the holy catholic Church, {'\n'}
{'    '}the communion of saints, {'\n'}
{'    '}the forgiveness of sins{'\n'}
{'    '}the resurrection of the body, {'\n'}
{'    '}and the life everlasting. Amen. </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<h2 id="prayers">The Prayers</h2>

<SmallItalic>{'\n'}The People stand or kneel </em></SmallItalic>

<BcpText><table class="vrtable">
	<tr>
		<td class="vrpeople">Officiant</em></td>
		<td>The Lord be with you.</td>
	</tr>
	<tr>
		<td class="vrpeople">People</em></td>
		<td>And also with you.</td>
	</tr>
	<tr>
		<td class="vrpeople">Officiant</em></td>
		<td>Let us pray.</td>
	</tr>
</table></BcpText>

<SmallItalic>Officiant and People</SmallItalic>

<table class="vrtable">
    <tr>
        <td>Our Father, who art in
        heaven,{'\n'}
       {'     '}hallowed be thy Name, {'\n'}
       {'     '}thy kingdom come, {'\n'}
       {'     '}thy will be done, {'\n'}
       {'       '}{'  '}on earth as it is
        in heaven. {'\n'}
        Give us this day our daily bread. {'\n'}
        And forgive us our trespasses, {'\n'}
       {'     '}as we forgive those {'\n'}
       {'       '}{'  '}who trespass
        against us. {'\n'}
        And lead us not into temptation, {'\n'}
       {'     '}but deliver us from evil. {'\n'}
        For thine is the kingdom, {'\n'}
       {'     '}and the power, and the glory, {'\n'}
       {'     '}for ever and ever. Amen.</td>
        <td>Our Father in heaven, {'\n'}
       {'     '}hallowed be your Name, {'\n'}
       {'     '}your kingdom come, {'\n'}
       {'     '}your will be done, {'\n'}
       {'       '}{'  '}on earth as in
        heaven. {'\n'}
        Give us today our daily bread. {'\n'}
        Forgive us our sins {'\n'}
       {'     '}as we forgive those {'\n'}
       {'       '}{'  '}who sin against us.
        {'\n'}
        Save us from the time of trial, {'\n'}
       {'     '}and deliver us from evil. {'\n'}
        For the kingdom, the power, {'\n'}
       {'     '}and the glory are yours, {'\n'}
       {'     '}now and for ever. Amen.</td>
    </tr>
</table>

<SmallItalic>Then follows one of these sets of Suffrages</SmallItalic>

<BcpText>{'       '}{' '}<Bold>A</Bold> </BcpText>

<BcpText>
V.{'    '}Show us your mercy, O Lord; {'\n'}
R.{'    '}And grant us your salvation. {'\n'}
V.{'    '}Clothe your ministers with righteousness; {'\n'}
R.{'    '}Let your people sing with joy. {'\n'}
V.{'    '}Give peace, O Lord, in all the world; {'\n'}
R.{'    '}For only in you can we live in safety.</BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>
V.{'    '}Lord, keep this nation under your care; {'\n'}
R.{'    '}And guide us in the way of justice and truth. {'\n'}
V.{'    '}Let your way be known upon earth; {'\n'}
R.{'    '}Your saving health among all nations. {'\n'}
V.{'    '}Let not the needy, O Lord, be forgotten; {'\n'}
R.{'    '}Nor the hope of the poor be taken away. {'\n'}
V.{'    '}Create in us clean hearts, O God; {'\n'}
R.{'    '}And sustain us with your Holy Spirit. </BcpText>

<BcpText>{'       '}{' '}<Bold>B </Bold></BcpText>

<BcpText>
V.{'    '}Save your people, Lord, and bless your inheritance; {'\n'}
R.{'    '}Govern and uphold them, now and always.{'\n'}
V.{'    '}Day by day we bless you; {'\n'}
R.{'    '}We praise your name for ever. {'\n'}
V.{'    '}Lord, keep us from all sin today; {'\n'}
R.{'    '}Have mercy upon us, Lord, have mercy. {'\n'}
V.{'    '}Lord, show us your love and mercy; {'\n'}
R.{'    '}For we put our trust in you. {'\n'}
V.{'    '}In you, Lord, is our hope; {'\n'}
R.{'    '}And we shall never hope in vain. </BcpText>

<p class="rubric" id="collects">The Officiant then says one or more of the following Collects</BcpText>

<BcpText><Italic>The Collect of the Day </Italic></BcpText>

<BcpText>{'\n'}
<Italic>A Collect for Sundays </Italic></BcpText>

<BcpText>O God, you make us glad with the weekly remembrance of {'\n'}
the glorious resurrection of your Son our Lord: Give us this {'\n'}
day such blessing through our worship of you, that the week {'\n'}
to come may be spent in your favor; through Jesus Christ our {'\n'}
Lord. <Italic>Amen.</Italic> </BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText><Italic>A Collect for Fridays </Italic></BcpText>

<BcpText>Almighty God, whose most dear Son went not up to joy but {'\n'}
first he suffered pain, and entered not into glory before he {'\n'}
was crucified: Mercifully grant that we, walking in the way {'\n'}
of the cross, may find it none other than the way of life and {'\n'}
peace; through Jesus Christ our Lord. <Italic>Amen.</Italic></BcpText>

<BcpText>{'\n'}
<Italic>A Collect for Saturdays </Italic></BcpText>

<BcpText>Almighty God, who after the creation of the world rested {'\n'}
from all your works and sanctified a day of rest for all your {'\n'}
creatures: Grant that we, putting away all earthly anxieties, {'\n'}
may be duly prepared for the service of your sanctuary, and {'\n'}
that our rest here upon earth may be a preparation for the {'\n'}
eternal rest promised to your people in heaven; through Jesus {'\n'}
Christ our Lord. <Italic>Amen.</Italic> </BcpText>

<BcpText>{'\n'}
<Italic>A Collect for the Renewal of Life </Italic></BcpText>

<BcpText>O God, the King eternal, whose light divides the day from the {'\n'}
night and turns the shadow of death into the morning: Drive {'\n'}
far from us all wrong desires, incline our hearts to keep your {'\n'}
law, and guide our feet into the way of peace; that, having {'\n'}
done your will with cheerfulness during the day, we may, {'\n'}
when night comes, rejoice to give you thanks; through Jesus {'\n'}
Christ our Lord. <Italic>Amen.</Italic> </BcpText>

<BcpText>{'\n'}
<Italic>A Collect for Peace </Italic></BcpText>

<BcpText>O God, the author of peace and lover of concord, to know {'\n'}
you is eternal life and to serve you is perfect freedom: Defend {'\n'}
us, your humble servants, in all assaults of our enemies; that {'\n'}
we, surely trusting in your defense, may not fear the power of {'\n'}
any adversaries; through the might of Jesus Christ our Lord. {'\n'}
<Italic>Amen.</Italic></BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText><Italic>A Collect for Grace </Italic></BcpText>

<BcpText>Lord God, almighty and everlasting Father, you have {'\n'}
brought us in safety to this new day: Preserve us with your {'\n'}
mighty power, that we may not fall into sin, nor be overcome {'\n'}
by adversity; and in all we do, direct us to the fulfilling of {'\n'}
your purpose; through Jesus Christ our Lord. <Italic>Amen. </Italic></BcpText>

<BcpText>{'\n'}
<Italic>A Collect for Guidance </Italic></BcpText>

<BcpText>Heavenly Father, in you we live and move and have our {'\n'}
being: We humbly pray you so to guide and govern us by {'\n'}
your Holy Spirit, that in all the cares and occupations of our {'\n'}
life we may not forget you, but may remember that we are {'\n'}
ever walking in your sight; through Jesus Christ our Lord. {'\n'}
<Italic>Amen.</Italic></BcpText>

<p class="rubric">{'\n'}Then, unless the Eucharist or a form of general intercession is to follow, {'\n'}
one of these prayers for mission is added</BcpText>

<BcpText>Almighty and everlasting God, by whose Spirit the whole {'\n'}
body of your faithful people is governed and sanctified: {'\n'}
Receive our supplications and prayers which we offer before {'\n'}
you for all members of your holy Church, that in their {'\n'}
vocation and ministry they may truly and devoutly serve you; {'\n'}
through our Lord and Savior Jesus Christ. <Italic>Amen.</Italic></BcpText>

<SmallItalic>or this</SmallItalic>

<BcpText>O God, you have made of one blood all the peoples of the {'\n'}
earth, and sent your blessed Son to preach peace to those {'\n'}
who are far off and to those who are near: Grant that people {'\n'}
everywhere may seek after you and find you; bring the {'\n'}
nations into your fold; pour out your Spirit upon all flesh; {'\n'}
and hasten the coming of your kingdom; through Jesus {'\n'}
Christ our Lord. <Italic>Amen</Italic>. </BcpText>

<SmallItalic>or the following</SmallItalic>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText>Lord Jesus Christ, you stretched out your arms of love on {'\n'}
the hard wood of the cross that everyone might come within {'\n'}
the reach of your saving embrace: So clothe us in your Spirit {'\n'}
that we, reaching forth our hands in love, may bring those {'\n'}
who do not know you to the knowledge and love of you; for {'\n'}
the honor of your Name. <Italic>Amen.</Italic> </BcpText>

<SmallItalic>Here may be sung a hymn or anthem.</SmallItalic>

<SmallItalic>Authorized intercessions and thanksgivings may follow.</SmallItalic>

<SmallItalic>{'\n'}Before the close of the Office one or both of the following may be used</SmallItalic>

<BcpText><em id="thanksgiving">The General Thanksgiving</em></BcpText>

<SmallItalic>Officiant and People</SmallItalic>

<BcpText>Almighty God, Father of all mercies, {'\n'}
we your unworthy servants give you humble thanks {'\n'}
for all your goodness and loving-kindness {'\n'}
to us and to all whom you have made. {'\n'}
We bless you for our creation, preservation, {'\n'}
and all the blessings of this life; {'\n'}
but above all for your immeasurable love {'\n'}
in the redemption of the world by our Lord Jesus Christ; {'\n'}
for the means of grace, and for the hope of glory. {'\n'}
And, we pray, give us such an awareness of your mercies, {'\n'}
that with truly thankful hearts we may show forth your praise, {'\n'}
not only with our lips, but in our lives, {'\n'}
by giving up our selves to your service, {'\n'}
and by walking before you {'\n'}
in holiness and righteousness all our days; {'\n'}
through Jesus Christ our Lord, {'\n'}
to whom, with you and the Holy Spirit, {'\n'}
be honor and glory throughout all ages. Amen.</BcpText>

{'\n'}
{'\n'}


{'\n'}
{'\n'}

<BcpText><Italic>A Prayer of St. Chrysostom </Italic></BcpText>

<BcpText>Almighty God, you have given us grace at this time with one {'\n'}
accord to make our common supplication to you; and you {'\n'}
have promised through your well-beloved Son that when two {'\n'}
or three are gathered together in his Name you will be in the {'\n'}
midst of them: Fulfill now, O Lord, our desires and petitions {'\n'}
as may be best for us; granting us in this world knowledge of {'\n'}
your truth, and in the age to come life everlasting. <Italic>Amen.</Italic></BcpText>

<SmallItalic>{'\n'}Then may be said</SmallItalic>

<BcpText>Let us bless the Lord. {'\n'}
<Italic>Thanks be to God.</Italic> </BcpText>

<p class="rubric">From Easter Day through the Day of Pentecost "Alleluia, alleluia" may {'\n'}
be added to the preceding versicle and response. </em></BcpText>

<SmallItalic>{'\n'}The Officiant may then conclude with one of the following</em></SmallItalic>

<BcpText>The grace of our Lord Jesus Christ, and the love of God, and {'\n'}
the fellowship of the Holy Spirit, be with us all evermore. {'\n'}
<Italic>Amen.</em>{'    '}<em class="small">2 Corinthians 13:14 </Italic></BcpText>

<BcpText>May the God of hope fill us with all joy and peace in {'\n'}
believing through the power of the Holy Spirit. <Italic>Amen.</Italic> {'\n'}
<SmallItalic>Romans 15:13 </SmallItalic></BcpText>

<BcpText>Glory to God whose power, working in us, can do infinitely {'\n'}
more than we can ask or imagine: Glory to him from {'\n'}
generation to generation in the Church, and in Christ Jesus {'\n'}
for ever and ever. <Italic>Amen.</em>{'    '}<em class="small">Ephesians 3:20,21</Italic> </BcpText>

        
        
        */}
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

export default MorningPrayerRite2;
