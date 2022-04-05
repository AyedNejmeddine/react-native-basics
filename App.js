import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [param, setParam] = useState({title: 'less then 10', style: '#0000ff'});

  const onClickButton = () => {
    setCount(count + 1);
    if (count >= 5) {
      setParam({title: 'more then 10', style: '#ff0000'});
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.button}>
        <Button
          color={param.style}
          title="click here"
          onPress={onClickButton}
        />
      </View>
      <Text style={styles.text}>{param.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    margin: 20,
  },
  button: {
    height: 75,
    width: '40%',
  },
});

export default App;
