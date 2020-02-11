/**
 * My profile
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Compline = ({navigator, name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      The Officiant begins

The Lord Almighty grant us a peaceful night and a perfect
end. Amen.

Officiant	Our help is in the Name of the Lord;
People	The maker of heaven and earth.
The Officiant may then say

Let us confess our sins to God.

Silence may be kept.

Officiant and People

Almighty God, our heavenly Father:
We have sinned against you,
through our own fault,
in thought, and word, and deed,
and in what we have left undone.
For the sake of your Son our Lord Jesus Christ,
forgive us all our offenses;
and grant that we may serve you
in newness of life,
to the glory of your Name. Amen.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 23,
    padding: 10,
  },
});

export default Compline;
