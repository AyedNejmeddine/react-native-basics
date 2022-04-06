import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSabmitted] = useState(false);
  const [showWornig, setShowWornig] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSabmitted(!submitted);
    } else {
      setShowWornig(true);
    }
  };

  return (
    <View style={styles.body}>
      <Modal
        transparent
        visible={showWornig}
        animationType="fade"
        hardwareAccelerated
        onRequestClose={() => setShowWornig(false)}>
        <View style={styles.center_view}>
          <View style={styles.warnin_modal}>
            <View style={styles.warnin_title}>
              <Text style={styles.title}>WARNING !</Text>
            </View>
            <View style={styles.body_modal}>
              <Text style={styles.body_text}>
                the length of name must be longer then 3 caracteres
              </Text>
            </View>
            <Pressable
              style={styles.warning_button}
              onPress={() => setShowWornig(false)}>
              <Text style={styles.body_text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  warnin_modal: {
    height: 400,
    width: 400,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
  },
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  warnin_title: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0',
    borderWidth: 1,
    borderColor: '#999',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  body_modal: {
    height: 260,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body_text: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  warning_button: {
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#00ffff',
    borderWidth: 1,
    borderColor: '#999',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default App;
