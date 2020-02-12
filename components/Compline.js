/**
 * My profile
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button, View, Text} from 'react-native';
import HTML from 'react-native-render-html';

import Italic from './shared/Italic';
import BcpText from './shared/BcpText';
import Spacer from './shared/Spacer';
import People from './shared/People';

const Compline = ({navigation, name}) => {
  const prePsalmContent = `
  <p class="rubric" id="sentences">The Officiant begins</p>

<p>The Lord Almighty grant us a peaceful night and a perfect<br/>
end. <em>Amen.</em></p>

<table class="vrtable">
	<tr>
		<td class="vrpeople">Officiant</td>
		<td>Our help is in the Name of the Lord;</td>
	</tr>
	<tr>
		<td class="vrpeople">People</td>
		<td>The maker of heaven and earth.</td>
	</tr>
</table>

<p class="rubric">The Officiant may then say</p>

<p id="confession">Let us confess our sins to God.</p>

<p class="rubric">Silence may be kept.</p>

<p class="rubric">Officiant and People</p>

<p>Almighty God, our heavenly Father:<br/>
We have sinned against you,<br/>
through our own fault,<br/>
in thought, and word, and deed,<br/>
and in what we have left undone.<br/>
For the sake of your Son our Lord Jesus Christ,<br/>
forgive us all our offenses;<br/>
and grant that we may serve you<br/>
in newness of life,<br/>
to the glory of your Name. Amen.<br/>
</p>
<p class="rubric">Officiant</p>

<p>May the Almighty God grant us forgiveness of all our sins,<br/>
and the grace and comfort of the Holy Spirit. <em>Amen.</em><br/>
</p>

<p class="rubric">The Officiant then says</p>


<tabel>
	<tr>
		<td> Hello</td>
		<td>O God, make speed to save us.</td>
	</tr>
	<tr>
		<td>People</td>
		<td>O Lord, make haste to help us.</td>
	</tr>
</tabel><br/>

<p class="rubric">Officiant and People</p>

<p>Glory to the Father, and to the Son, and to the Holy Spirit: as <br/>
it was in the beginning, is now, and will be for ever. Amen. </p>

<p><em class="smaller">Except in Lent, add</em> &nbsp;&nbsp; Alleluia.<br/>
</p>

<p class="rubric" id="psalm">One or more of the following Psalms are sung or said. Other suitable selections may be substituted.<br/>
<br/></p>
`

  const renderers = {
    hr: () => <View style={{ width: '100%', height: 1, backgroundColor: 'blue' }} />,
    tabel: (children) => <View style={{ width: '100%', height: 1, backgroundColor: 'red' }}><Text>Yo</Text></View>,
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <HTML
          html={prePsalmContent}
          classesStyles={{'rubric': {fontStyle: 'italic'}}}
          renderers={renderers}
        />

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

        <Italic>At the end of the Psalms is sung or said</Italic>
        <Spacer />

        <BcpText>
          Glory to the Father, and to the Son, and to the Holy Spirit: *
        </BcpText>
        <BcpText>
          {'  '}as it was in the beginning, is now, and will be for ever. Amen.
        </BcpText>
        <Spacer />

        <Italic>
          One of the following, or some other suitable passage of Scripture, is read
        </Italic>
        <Spacer />

        <BcpText>
          Lord, you are in the midst of us, and we are called by your
          forsake us, O Lord our God. {'   '} <Italic>Jeremiah 14:9,22</Italic>
        </BcpText>
        <Spacer />

        <People>Thanks be to God.</People>

        <Italic>or this</Italic>
        <Spacer />

        <BcpText>
          Come to me, all who labor and are heavy-laden, and I will
          give you rest. Take my yoke upon you, and learn from me;
          for I am gentle and lowly in heart, and you will find rest for 
          your souls. For my yoke is easy, and my burden is light.
          {'   '} <Italic>Matthew 11:28-30</Italic>
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
