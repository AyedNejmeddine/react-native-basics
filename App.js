import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSabmitted] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSabmitted(!submitted);
    } else {
      Alert.alert(
        'warning',
        'the length of name must be longer then 3 caracteres',
        [
          {text: 'cancel', onPress: () => console.warn('on press cancel')},
          {text: 'ok', onPress: () => console.warn('on press ok')},
        ],
        {
          cancelable: true,
          onDismiss: () => {
            ToastAndroid.show('click outside the Alert', ToastAndroid.SHORT);
          },
        },
      );
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Write your name here</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. Nejmeddine"
        onChangeText={value => setName(value)}
      />
      <Pressable
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#f00' : '#0f0'},
        ]}
        hitSlop={{top: 30, button: 30, right: 30, left: 30}}
        onPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>your are registred as : {name}</Text>
      ) : null}
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
    marginBottom: 25,
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

export default App;
