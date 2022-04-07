import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import CustomButton from './src/CustomButton';
import Header from './src/Header';

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
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://i.pinimg.com/originals/f0/40/f0/f040f07ac0ad09cc155ecc4bbface15a.jpg',
      }}>
      <Header />
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
      <CustomButton
        onPressHandler={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
      />
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>your are registred as : {name}</Text>
          <Image
            style={styles.image}
            source={require('./assets/done.png')}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={require('./assets/error.png')}
          resizeMode="stretch"
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
  image: {
    height: 100,
    width: 100,
  },
});

export default App;
