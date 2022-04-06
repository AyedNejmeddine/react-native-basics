import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  SectionList,
} from 'react-native';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([
    {title: 'Title 1', data: ['item 1-1', 'item 1-2', 'item 1-3']},
    {title: 'Title 2', data: ['item 2-1', 'item 2-2']},
    {title: 'Title 3', data: ['item 3-1', 'item 3-2', 'item 3-3']},
  ]);

  const onRefreshItem = () => {
    setRefresh(true);
    setItems([
      ...items,
      {
        title: 'Title 4',
        data: ['item 4-1', 'item 4-2', 'item 4-3', 'item 4-4'],
      },
    ]);
    setRefresh(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.title}>
          <Text style={styles.text}>{section.title}</Text>
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
  title: {
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
