import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Write your name here</Text>
      <TextInput style={styles.input} placeholder="e.g. Nejmeddine" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    margin: 10,
    color: '#000000',
  },
  input: {
    width: 400,
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default App;
