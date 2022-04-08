import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function ScreenB({navigation, route}) {
  const {ItemName, ItemId} = route.params;

  const onPressHandler = () => {
    navigation.navigate('Screen_A', {Message: 'message from B'});
    // navigation.goBack();
    // navigation.setParams({ ItemId: 14 });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#ddd' : '#0f0'},
        ]}>
        <Text style={styles.text}>Go Back to Screen A</Text>
      </Pressable>
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>ID: {ItemId}</Text>
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
