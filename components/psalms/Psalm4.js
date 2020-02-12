
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

import Italic from '../shared/Italic';
import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm4 = ({navigator, name}) => {
  const psalmText = `<p>1
  &nbsp;&nbsp; Answer me when I call, O God, defender of my cause; *<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; you set me free when I am hard-pressed;<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; have mercy on me and hear my prayer.</p>
  
  <p>2
  &nbsp;&nbsp; &quot;You mortals, how long will you dishonor my glory; *<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; how long will you worship dumb idols<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; and run after false gods?&quot;</p>
  
  <p>3
  &nbsp;&nbsp; Know that the L<span style="font-size: small">ORD</span> does wonders for the faithful; *<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; when I call upon the L<span style="font-size: small">ORD</span>, he will hear me.</p>
  
  <p>4
  &nbsp;&nbsp; Tremble, then, and do not sin; *<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; speak to your heart in silence upon your bed.</p>
  
  <p>5
  &nbsp;&nbsp; Offer the appointed sacrifices *<br/>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; and put your trust in the L<span style="font-size: small">ORD</span>.
  </p>

  <p>6
&nbsp;&nbsp; Many are saying,<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &quot;Oh, that we might see better times!&quot; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Lift up the light of your countenance upon us, O L<span style="font-size: small">ORD</span>.</p>

<p>7
&nbsp;&nbsp; You have put gladness in my heart, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; more than when grain and wine and oil increase.</p>

<p>8
&nbsp;&nbsp; I lie down in peace; at once I fall asleep; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; for only you, L<span style="font-size: small">ORD</span>, make me dwell in safety.<br/>
<br/><br/></p>
  `
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 4" annotation=" Cum invocarem" />
        <HTML html={psalmText} />
        <BcpText />
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

export default Psalm4;
