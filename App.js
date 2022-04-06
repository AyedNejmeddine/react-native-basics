import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
    {key: 7, item: 'item 7'},
  ]);

  const onRefreshItem = () => {
    setRefresh(true);
    setItems([...items, {key: 8, item: 'item 8'}]);
    setRefresh(false);
  };

  return (
    <View style={styles.body}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefreshItem} />
        }>
        {items.map(object => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 80,
    margin: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default App;
