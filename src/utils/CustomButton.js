import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#f00' : '#0f0'},
      ]}
      hitSlop={{top: 30, button: 30, right: 30, left: 30}}
      onPress={props.onPressHandler}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 10,
    color: '#000000',
  },
  button: {
    height: 80,
    width: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default CustomButton;
