import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSabmitted] = useState(false);

  const onPressHandler = () => {
    setSabmitted(!submitted);
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
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity>
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
    backgroundColor: '#0d0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default App;
