import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([
    {item: 'item 1'},
    {item: 'item 2'},
    {item: 'item 3'},
    {item: 'item 4'},
    {item: 'item 5'},
    {item: 'item 6'},
    {item: 'item 7'},
  ]);

  const onRefreshItem = () => {
    setRefresh(true);
    setItems([...items, {item: 'item 8'}]);
    setRefresh(false);
  };

  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.item}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefreshItem} />
      }
    />
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
