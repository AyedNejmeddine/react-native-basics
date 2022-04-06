import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

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
      <Button
        color={'#0f0'}
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={name.length <= 0 ? true : false}
      />
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
    margin: 20,
  },
});

export default App;
