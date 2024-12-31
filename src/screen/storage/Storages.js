// import {View, Text, FlatList, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {Increment, DECREMENT} from '../../redux/action/increment';
// const Storages = () => {
//   const data = [
//     {id: 1, name: 'abc', count: 1},
//     {id: 2, name: 'xyz', count: 1},
//   ];
//   const [itemData, setItemData] = useState(data);

//   const incrementCount = id => {
//     setItemData(preItem =>
//       preItem.map(item =>
//         item.id === id ? {...item, count: item.count + 1} : item,
//       ),
//     );
//   };

//   const decremetCount = id => {
//     setItemData(perItem =>
//       perItem
//         .map(item => (item.id === id ? {...item, count: item.count - 1} : item))
//         .filter(item => item.count > 0),
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <Text style={{marginTop: 20, padding: 4, borderWidth: 1}}>Storages</Text>
//       <FlatList
//         data={itemData}
//         renderItem={({item}) => {
//           return (
//             <View
//               style={{
//                 height: 40,
//                 borderWidth: 1,
//                 marginTop: 20,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//               }}>
//               <TouchableOpacity
//                 style={{borderWidth: 1, width: '40%', paddingVertical: 10}}
//                 onPress={() => incrementCount(item?.id)}>
//                 <Text>Increment</Text>
//               </TouchableOpacity>
//               <Text style={{fontSize: 20, color: '#000'}}>{item.count}</Text>
//               <TouchableOpacity
//                 style={{borderWidth: 1, width: '40%', paddingVertical: 10}}
//                 onPress={() => decremetCount(item.id)}>
//                 <Text>Decrement</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         }}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default Storages;

// import React, {useState, useMemo} from 'react';
// import {View, Text, TextInput, FlatList} from 'react-native';

// const Storages = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

//   const filteredItems = useMemo(() => {
//     return items.filter(item =>
//       item.toLowerCase().includes(searchQuery.toLowerCase()),
//     );
//   }, [items, searchQuery]);

//   return (
//     <View style={{padding: 20}}>
//       <TextInput
//         style={{
//           borderWidth: 1,
//           borderColor: '#ccc',
//           padding: 10,
//           marginBottom: 10,
//         }}
//         placeholder="Search..."
//         value={searchQuery}
//         onChangeText={text => setSearchQuery(text)}
//       />
//       <FlatList
//         data={filteredItems}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => <Text style={{padding: 10}}>{item}</Text>}
//       />
//     </View>
//   );
// };

// export default Storages;

import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';

// Memoized child component for list items
const ListItem = React.memo(({item, onToggle}) => {
  console.log('PPPPPPPPMMMMMMMMMMMMPP');
  // const useFocusEffect = () => {
  //   return () => {
  //     console.log('Llppppppppppppppp');
  //   };
  // };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Button
        title={item.selected ? 'Unselect' : 'Select'}
        onPress={() => onToggle(item.id)}
      />
    </View>
  );
});

const Storages = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Apple', selected: false},
    {id: 2, name: 'Banana', selected: false},
    {id: 3, name: 'Cherry', selected: false},
  ]);

  // Function to toggle selection state
  const toggleItem = useCallback(id => {
    console.log('LLLLLLLLLLLLLLLLLLLLL', id);
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, selected: !item.selected} : item,
      ),
    );
  }, []);

  // Memoized render function for FlatList
  // const renderItem = useCallback(
  //   ({item}) => <ListItem item={item} onToggle={toggleItem} />,
  //   [toggleItem],
  // );

  const renderItem = useCallback(
    ({item}) => {
      return <ListItem item={item} onToggle={toggleItem} />;
    },
    [toggleItem],
  );

  const [state, setState] = useState(0);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <Text onPress={() => setState(pre => pre + 1)}>sdffffffffff{state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Storages;

// import React, {useState} from 'react';
// import {View, Text, Button} from 'react-native';

// const C = () => {
//   return (
//     <View>
//       <Text>sdfsf</Text>
//       <Text>sdfsf</Text>
//       <Text>sdfsf</Text>
//       <Text>sdfsf</Text>
//       <HOC cmp={Counter} />
//       {/* <HOC cmp={Counter1} /> */}
//     </View>
//   );
// };

// const HOC = props => {
//   return (
//     <View>
//       <props.cmp />
//     </View>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View>
//       <Text style={{alignSelf: 'center', marginBottom: 5}}>{count}</Text>

//       <Button title="click here" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };

// // const Counter1 = () => {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <View>
// //       <Text
// //         style={{
// //           alignSelf: 'center',
// //           marginBottom: 5,
// //           backgroundColor: 'red',
// //           paddingHorizontal: 10,
// //         }}>
// //         {count}
// //       </Text>

// //       <Button title="click here" onPress={() => setCount(count + 1)} />
// //     </View>
// //   );
// // };

// export default C;
