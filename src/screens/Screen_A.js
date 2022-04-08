import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function ScreenA({navigation, route}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    // navigation.toggleDrawer();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#ddd' : '#0f0'},
        ]}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
      <Text style={styles.text}>{route.params?.Message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
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
