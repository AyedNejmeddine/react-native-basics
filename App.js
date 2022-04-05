/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello world !</Text>
      <Button
        title="click here"
        onPress={() => {
          Linking.openURL(
            'https://github.com/AyedNejmeddine/react-native-basics',
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    margin: 20,
  },
});

export default App;
