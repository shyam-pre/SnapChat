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

import React, {useState, useCallback, useMemo, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {apiFunction, BASE_URL} from '../../provider/ApiInfo';
import Loader from '../../component/Loader';
import axios from 'axios';
import notifee, {AndroidImportance} from '@notifee/react-native';
import {CameraContext} from '../Hooks/useRef/AppContext';

// Memoized child component for list items
const ListItem = React.memo(({item, onToggle}) => {
  console.log('PPPPPPPPMMMMMMMMMMMMPP');
  // const useFocusEffect = () => {
  //   return () => {
  //     console.log('Llppppppppppppppp');
  //   };
  // };

  const {cameraData} = useContext(CameraContext);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Button
        title={item.selected ? 'Unselect' : 'Select'}
        onPress={() => onToggle(item.id)}
      />

      <Text>{JSON.stringify(cameraData) || ''}</Text>
    </View>
  );
});

const Storages = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Apple', selected: false},
    {id: 2, name: 'Banana', selected: false},
    {id: 3, name: 'Cherry', selected: false},
  ]);

  // context api

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
  const [loading, setLoading] = useState(false);

  const getHomeData = () => {
    setLoading(true);
    apiFunction
      .get('home')
      .then(data => {
        console.log('dat', data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('eeeee', err);
      });
  };

  // const getSendOtp = async () => {
  //   // const params = {
  //   //   email: 'shyampremad@gmail.com',
  //   // };

  //   // const data = apiFunction.createFormData(params);
  //   const formData = apiFunction.createFormData({
  //     email: 'shyampremad@gmail.com',
  //   });
  //   // const headers = {
  //   //   Accept: '*/*',
  //   //   ' Content-Type': 'multipart/form-data',
  //   // };
  //   const headers = {
  //     Accept: '*/*',
  //     'Content-Type': 'multipart/form-data',
  //   };

  //   setLoading(true);
  //   await apiFunction
  //     .post('forgot_password', formData, headers)
  //     .then(res => {
  //       console.log('res', res), setLoading(false);
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //       console.log('errssssssss', err);
  //     });
  // };

  // const getSendOtp = async () => {
  //   // const formData = apiFunction.createFormData({
  //   //   email: 'shyampremad@gmail.com',
  //   //   password: '123456',
  //   // });

  //   const formData = {
  //     email: 'shyampremad@gmail.com',
  //     password: '123456',
  //   };

  //   // console.log('FormData:', formData);

  //   // const headers = {
  //   //   Accept: '*/*',
  //   //   'Content-Type': 'multipart/form-data',
  //   // }

  //   const headers = {
  //     Accept: '*/*',
  //     ' Content-Type': 'multipart/form-data',
  //   };

  //   setLoading(true);

  //   try {
  //     const response = await apiFunction.post('login', formData, headers);
  //     console.log('API Response:', response);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error('API Error:', error.response?.data || error.message);
  //     Alert.alert(
  //       'Error',
  //       error.response?.data?.message ||
  //         'Something went wrong. Please try again later.',
  //     );
  //   }
  // };

  const getSendOtp = async () => {
    let auth_token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDJmM2RmMGI0NDIyN2Y3MDI0Zjk0ZjUxMmViOGQ0NDk5MDNjNjViYWM3N2FhODA0ZTQyNjE3NTRkNjFjNGQ2ZmIzYWEwYmRiZmVjYjUzM2UiLCJpYXQiOjE3MzU2NTA3NzUuNDgxMjY1MDY4MDU0MTk5MjE4NzUsIm5iZiI6MTczNTY1MDc3NS40ODEyNjc5MjkwNzcxNDg0Mzc1LCJleHAiOjE3NjcxODY3NzUuNDYwNzQ3MDAzNTU1Mjk3ODUxNTYyNSwic3ViIjoiMjMiLCJzY29wZXMiOltdfQ.PI50-dSQvnxFRF2HHhxAQFhttoMXIZ0zqK7KVgExNEssWh0Un8EeFGhvQaUGLR8sM1ttw88Fwr8A66P0tIv_zReU6YfvmhUw55jBd-N1fX_GJSygtGEWi2wtr2NCXfqez9SsAUjw0B04xlOfTZQSB01aKYxwcmLX3Yb_Schj0GcvfxEEBdkI6N1JYYpWWVLqqIhe9WZ_no7wWZCaCsy-zkaN3ULvak3EjrtMdHdoDKVFeA4G4QM-MLssjd2CuO4FSJ_yoYHKstxMoxgktVx2Yk0u13khmINCsYQyRCHjje--ABWEipslZn2Py8zTSzFFpeojkdiXA7df4HdckLGvEGCTpqERt93sCAiGuYdq5YUgcxB8b3qE3LT-8C3d71e0pj2A8iM9CEyyrmHFrASoTTN_Y8yafeVjoEQ6-NXgaEDQ-ziV6HmfodKEFIkxHNsfl0Ge3myOij7iOG6Lx38vB3zf-aNuqoCYEGEmYPyTDqVWNTqd3OJbE-aLhyDfkNjwH1mZD2udts3D8UWk_2XKXsDs3jCbDuJBsS8KJt1gqzrW2ww3HoI4qSBWNdRpElQw0Y8-wulsobBllbEu0loHe5_SnSq1ur_IzCA6CHk_rekW0aan0KaEO_-V88m75yiwcAfU59dv14vjXBMgmocoa_zBzvFLbapY0sfElV8Grec';

    // const formData = apiFunction.createFormData({
    // email: 'shyampremad@gmail.com',
    // password: '123456',
    // });

    // const formData = {
    //   email: 'shyampremad@gmail.com',
    //   password: '123456',
    // };
    // const params = {
    //   email: 'shyampremad@gmail.com',
    //   password: '123456',
    // };

    // const formData = new FormData();
    // for (let key in params) {
    //   formData.append(key, params[key]);
    // }

    const headers = {
      Accept: '*/*',
      // 'content-type': 'multipart/form-data',
      'content-type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    };

    setLoading(true);
    try {
      // const response = await apiFunction.post('login', formData, headers);
      // const response = await axios({'POST',})
      // const response = await axios({
      //   method: 'GET',
      //   url: `${BASE_URL}home`,
      //   // data: formData,
      //   headers: headers,
      // });
      const response = await axios({
        method: 'GET',
        url: `${BASE_URL}home`,
        headers: headers,
      });

      console.log('dddddddddddddddsssssss', response.status);

      // if (response.status === 200) {
      //   console.log('API Response:', response);
      //   console.log('API Response: data', response.data);
      //   setLoading(false);
      // }
      if (response.status === 200) {
        console.log('API Response:', response.data);
      } else {
        console.error('Unexpected Response:', response);
      }
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      Alert.alert(
        'Error',
        error.response?.data?.message ||
          'Something went wrong. Please try again later.',
      );
    } finally {
      setLoading(false);
    }
  };
  //   catch (error) {
  //     setLoading(false);
  //     console.error('API Error:', error.response?.data || error.message);
  //     Alert.alert(
  //       'Error',
  //       error.response?.data?.message ||
  //         'Something went wrong. Please try again later.',
  //     );
  //   }
  // };

  // const getSendOtp = async () => {
  // let auth_token =
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDJmM2RmMGI0NDIyN2Y3MDI0Zjk0ZjUxMmViOGQ0NDk5MDNjNjViYWM3N2FhODA0ZTQyNjE3NTRkNjFjNGQ2ZmIzYWEwYmRiZmVjYjUzM2UiLCJpYXQiOjE3MzU2NTA3NzUuNDgxMjY1MDY4MDU0MTk5MjE4NzUsIm5iZiI6MTczNTY1MDc3NS40ODEyNjc5MjkwNzcxNDg0Mzc1LCJleHAiOjE3NjcxODY3NzUuNDYwNzQ3MDAzNTU1Mjk3ODUxNTYyNSwic3ViIjoiMjMiLCJzY29wZXMiOltdfQ.PI50-dSQvnxFRF2HHhxAQFhttoMXIZ0zqK7KVgExNEssWh0Un8EeFGhvQaUGLR8sM1ttw88Fwr8A66P0tIv_zReU6YfvmhUw55jBd-N1fX_GJSygtGEWi2wtr2NCXfqez9SsAUjw0B04xlOfTZQSB01aKYxwcmLX3Yb_Schj0GcvfxEEBdkI6N1JYYpWWVLqqIhe9WZ_no7wWZCaCsy-zkaN3ULvak3EjrtMdHdoDKVFeA4G4QM-MLssjd2CuO4FSJ_yoYHKstxMoxgktVx2Yk0u13khmINCsYQyRCHjje--ABWEipslZn2Py8zTSzFFpeojkdiXA7df4HdckLGvEGCTpqERt93sCAiGuYdq5YUgcxB8b3qE3LT-8C3d71e0pj2A8iM9CEyyrmHFrASoTTN_Y8yafeVjoEQ6-NXgaEDQ-ziV6HmfodKEFIkxHNsfl0Ge3myOij7iOG6Lx38vB3zf-aNuqoCYEGEmYPyTDqVWNTqd3OJbE-aLhyDfkNjwH1mZD2udts3D8UWk_2XKXsDs3jCbDuJBsS8KJt1gqzrW2ww3HoI4qSBWNdRpElQw0Y8-wulsobBllbEu0loHe5_SnSq1ur_IzCA6CHk_rekW0aan0KaEO_-V88m75yiwcAfU59dv14vjXBMgmocoa_zBzvFLbapY0sfElV8Grec';
  //   // const params = {
  //   //   email: 'shyampremad@gmail.com',
  //   //   password: '123456',
  //   // };

  //   // const formData = new FormData();
  //   // for (let key in params) {
  //   //   formData.append(key, params[key]);
  //   // }

  //     const headers = {
  //       Accept: '*/*',
  //       'Content-type': 'application/json',
  //     Authorization: `Bearer ${auth_token}`,
  //     // Replace YOUR_AUTH_TOKEN with the actual token
  //     // 'Content-type': 'multipart/form-data',
  //   };

  //   try {
  //     setLoading(true);
  //     const response = await fetch(`${BASE_URL}home`, {
  //       method: 'get',
  //       headers: headers,
  //       // body: formData,
  //     });
  //     if (!response.ok) {
  //       // If the status is not 200, throw an error
  //       // throw new Error(`HTTP error! status: ${response.status}`);
  //       Alert.alert('', 'HTTP error');
  //       throw new Error('HTTP error! status:');
  //     }
  //     if (response) {
  //       const newResponse = await response.json();
  //       console.log('LPPPPPP', newResponse);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error, 'ssssssssssssssserr');
  //     setLoading(false);
  //   }
  // };
  // const displayNotification = async () => {
  //   await notifee.createChannel({
  //     // title: remoteMessage?.notification?.title || 'Default Title',
  //     // body: remoteMessage.notification?.body || 'Default Body',
  //     title: 'sdafasdf',
  //     body: 'fasdf',
  //     android: {
  //       channelId: 'kjjlkjl',
  //       smallIcon: 'ic_launcher', // Ensure this matches your app's icon
  //     },
  //     importance: notifee.AndroidImportance.HIGH,
  //   });
  // };
  // const onDisplayNotification = async () => {
  //   const channelId = await notifee.createChannel({
  //     id: 'Importance',
  //     name: 'Default Channel',
  //     importance: AndroidImportance.HIGH,
  //     sound: '', // Ensure the file extension matches.
  //   });

  //   // Required for iOS
  //   // See https://notifee.app/react-native/docs/ios/permissions
  //   // await notifee.requestPermission();

  //   await notifee.displayNotification({
  //     id: '123',
  //     title: 'Snapchat app',
  //     body: 'snapChart',
  //     android: {
  //       channelId,
  //       importance: AndroidImportance.HIGH,
  //       sound: '', // Ensure the file extension matches.
  //     },
  //   });

  //   // const channelId = await notifee.createChannel({
  //   //   id: 'important',
  //   //   name: 'Important Notifications',
  //   //   importance: AndroidImportance.HIGH,
  //   // });

  //   // await notifee.displayNotification({
  //   //   title: 'Your account requires attention',
  //   //   body: 'You are overdue payment on one or more of your accounts!',
  //   //   android: {
  //   //     channelId,
  //   //     importance: AndroidImportance.HIGH,
  //   //   },
  //   // });

  //   // Sometime later...
  //   // await notifee.displayNotification({
  //   //   id: '123',
  //   //   title: 'aaaaaaaaaaaaaaaaaa',
  //   //   body: 'Updated main body content of the notification bbbbbbbbbb',
  //   //   android: {
  //   //     channelId,
  //   //     importance: AndroidImportance.HIGH,
  //   //   },
  //   // });
  // };

  const onDisplayNotification = async () => {
    // Delete existing channel to apply changes
    // await notifee.deleteChannel('Importance');

    // Create notification channel
    const channelId = await notifee.createChannel({
      id: 'fsdafa',
      name: 'imp',
      importance: AndroidImportance.HIGH,
      sound: 'notification_sound', // Omit the file extension.
    });

    // Display the notification
    await notifee.displayNotification({
      id: '123',
      title: 'Snapchat apdsfafp',
      body: 'snapChartsdfasfsf',
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        sound: 'notification_sound', // Omit the file extension.
      },
    });
  };
  return (
    <View style={styles.container}>
      <Loader loading={loading} />

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      {/* <TouchableOpacity
        onPress={onDisplayNotification}
        style={{borderWidth: 1}}>
        <Text
          // onPress={() => setState(pre => pre + 1)}
          style={{borderWidth: 1, padding: 10}}>
          sdffffffffff{state}
        </Text>
      </TouchableOpacity> */}

      <Button
        title="Display Notification"
        onPress={() => onDisplayNotification()}
      />
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
