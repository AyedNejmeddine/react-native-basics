import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function ScreenA({navigation}) {
  const onPresHandler = () => {
    navigation.navigate('Screen B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>from screen A</Text>
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#0d0' : '#0f0'},
          styles.button,
        ]}
        onPress={onPresHandler}>
        <Text style={styles.text}>Go to a screen B</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    margin: 10,
    color: '#000000',
  },
  button: {
    height: 80,
    width: 400,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
