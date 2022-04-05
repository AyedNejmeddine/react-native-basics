import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    margin: 10,
  },
  view1: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
