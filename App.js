import React from 'react';
import {View, Text, StyleSheet, Pressable as Guessable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

function ScreenA({navigation}) {
  const onPresHandler = () => {
    navigation.navigate('Screen B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>from screen A</Text>
      <Guessable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#0d0' : '#0f0'},
          styles.button,
        ]}
        onPress={onPresHandler}>
        <Text style={styles.text}>Go to a screen B</Text>
      </Guessable>
    </View>
  );
}

function ScreenB({navigation}) {
  const onPresHandler = () => {
    // navigation.navigate('Screen A');
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>from screen B</Text>
      <Guessable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#0d0' : '#0f0'},
          styles.button,
        ]}
        onPress={onPresHandler}>
        <Text style={styles.text}>Go back to a screen A</Text>
      </Guessable>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen
          // options={{header: () => null}}
          name="Screen A"
          component={ScreenA}
        />
        <Stack.Screen name="Screen B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

export default App;
