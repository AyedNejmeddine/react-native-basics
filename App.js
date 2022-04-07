import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenA, ScreenB} from './src/screens';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {height: 80},
          tabBarInactiveTintColor: '#5f5',
          tabBarActiveTintColor: '#f00',
          tabBarInactiveBackgroundColor: '#aaa',
          tabBarActiveBackgroundColor: '#5f5',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 20},
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
              size = focused ? 35 : 20;
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 35 : 20;
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Screen_A" component={ScreenA} />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
          options={{tabBarBadge: 5}}
        />
      </Tab.Navigator>
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
