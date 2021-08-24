import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {Text} from 'react-native';

import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm31 = ({navigator, name}) => {
  const psalmText = {html: `<p>1
  &nbsp;&nbsp; In you, O L<span style="font-size: small">ORD</span>, have I taken refuge;<br>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; let me never be put to shame: *<br>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; deliver me in your righteousness.</p>
  <p>2
&nbsp;&nbsp; Incline your ear to me; *<br>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; make haste to deliver me.</p>
<p>3
&nbsp;&nbsp; Be my strong rock, a castle to keep me safe, <br>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; for you are my crag and my stronghold; *<br>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; for the sake of your Name, lead me and guide me.</p>
<p>4
&nbsp;&nbsp; Take me out of the net that they have secretly set for me, *<br>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; for you are my tower of strength.</p>
<p>5
&nbsp;&nbsp; Into your hands I commend my spirit, *<br>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; for you have redeemed me,<br>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; O L<span style="font-size: small">ORD</span>, O God of truth.<br>
<br><br></p>` };

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 31" annotation="In te, Domine, speravi" />
        <RenderHtml contentWidth={width} source={psalmText} />
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

export default Psalm31;
