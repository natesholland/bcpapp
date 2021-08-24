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

const Psalm134 = ({navigator, name}) => {
  const psalmText = {html: `
  <p>1
&nbsp;&nbsp; Behold now, bless the L<span style="font-size: small">ORD</span>, all you servants of the L<span style="font-size: small">ORD</span>, *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; you that stand by night in the house of the <small>LORD</small>.</p>

<p>2
&nbsp;&nbsp; Lift up your hands in the holy place and bless the L<span style="font-size: small">ORD</span>; *<br/>
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; the L<span style="font-size: small">ORD</span> who made heaven and earth bless you out of Zion.<br/>
<br/></p>
  `,
  };

  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <PsalmHeader title="Psalm 134" annotation="Qui habitat" />
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

export default Psalm134;
