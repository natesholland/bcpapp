import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';

import BcpText from '../shared/BcpText';
import PsalmHeader from './PsalmHeader';

const Psalm91 = ({navigator, name}) => {
  const psalmText = {
    html: `
  <p>1
&nbsp;&nbsp; He who dwells in the shelter of the Most High *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; abides under the shadow of the Almighty.<br/>
</p>

<p>2
&nbsp;&nbsp; He shall say to the L<span style="font-size: small">ORD</span>,<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &quot;You are my refuge and my stronghold, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; my God in whom I put my trust.&quot;<br/>
</p>
<p>3
&nbsp;&nbsp; He shall deliver you from the snare of the hunter *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; and from the deadly pestilence.</p>

<p>4
&nbsp;&nbsp; He shall cover you with his pinions,<br/>
&nbsp;&nbsp; &nbsp;&nbsp; and you shall find refuge under his wings; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; his faithfulness shall be a shield and buckler.</p>

<p>5
&nbsp;&nbsp; You shall not be afraid of any terror by night, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; nor of the arrow that flies by day;</p>

<p>6
&nbsp;&nbsp; Of the plague that stalks in the darkness, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; nor of the sickness that lays waste at mid-day.</p>

<p>7
&nbsp;&nbsp; A thousand shall fall at your side<br/>
&nbsp;&nbsp; &nbsp;&nbsp; and ten thousand at your right hand, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; but it shall not come near you.</p>

<p>8
&nbsp;&nbsp; Your eyes only have to behold *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; to see the reward of the wicked.</p>

<p>9
&nbsp;&nbsp; Because you have made the L<span style="font-size: small">ORD</span> your refuge, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; and the Most High your habitation,</p>

<p>10
&nbsp;&nbsp; There shall no evil happen to you, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;neither shall any plague come near your dwelling.</p>

<p>11
&nbsp;&nbsp; For he shall give his angels charge over you, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;to keep you in all your ways.</p>

<p>12
&nbsp;&nbsp; They shall bear you in their hands, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;lest you dash your foot against a stone.</p>

<p>13
&nbsp;&nbsp; You shall tread upon the lion and the adder; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;you shall trample the young lion and the serpent<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
&nbsp;&nbsp; &nbsp;&nbsp;under your feet. </p>

<p>14
&nbsp;&nbsp; Because he is bound to me in love,<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;therefore will I deliver him; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; I will protect him, because he knows my Name.</p>

<p>15
&nbsp;&nbsp; He shall call upon me, and I will answer him; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;I am with him in trouble;<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;I will rescue him and bring him to honor.</p>

<p>16
&nbsp;&nbsp; With long life will I satisfy him, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;and show him my salvation.<br/>
<br/><br/></p>
`,
  };

  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 91" annotation="Qui habitat" />
        <RenderHTML contentWidth={width} source={psalmText} />
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

export default Psalm91;
