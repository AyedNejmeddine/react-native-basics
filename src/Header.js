import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native Basics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  view: {
    height: 80,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000077',
  },
});

export default Header;
