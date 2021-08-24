import React from 'react';
import {StyleSheet, Text} from 'react-native';

const PsalmHeader = ({title, annotation}) => {
  return (
    <Text style={styles.header}>
      <Text style={styles.title}>{title}</Text> {'   '}
      <Text style={styles.annotation}>{annotation}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  annotation: {
    fontStyle: 'italic',
  },
  header: {
    marginBottom: 15,
    padding: 5,
  },
});

export default PsalmHeader;
