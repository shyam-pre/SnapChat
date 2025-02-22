// // import {View, Text, TouchableOpacity} from 'react-native';
// // import React from 'react';
// // import {SafeAreaProvider} from 'react-native-safe-area-context';
// // import {useGetDataQuery, useLoginUserMutation} from '../../redux/ApiCall';
// // import Loader from '../../component/Loader';
// // import {useDispatch, useSelector} from 'react-redux';
// // import {clearToken, storeToken} from '../../redux/tokenSlice';
// // import {setData, cleanData} from '../../redux/defaultDataSlice';
// // // import {clearToken, setToken} from '../../redux/tokenSlice';
// // const Maps = () => {
// //   // const {data, isLoading, error} = useGetDataQuery();
// //   // const {data, isLoading, error} = useLoginUserQury();
// //   // const [addLogin, {isLoading}] = useLoginUserQuery();

// //   // const loginUser = async () => {
// //   //   const res = await addLogin({email: 'shyampremad@gmail.com'});
// //   //   console.log('lginres', res);
// //   // };

// //   const [addLogin, {isLoading}] = useLoginUserMutation();

// //   const loginUser = async () => {
// //     const params = {
// //       email: 'shyampremad@gmail.com',
// //       password: '123456',
// //     };

// //     const formdata = new FormData();
// //     for (let key in params) {
// //       formdata.append(key, params[key]);
// //     }
// //     try {
// //       const res = await addLogin(formdata);
// //       console.log('Login response:', res);
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //     }
// //   };

// //   const dispatch = useDispatch();
// //   const token = useSelector(state => state.token.token);
// //   console.log('tokennnnnnnnnn', token);

// //   const getDefaultData = useSelector(state => state.defaultData);
// //   console.log('getDefaulttttttttt', getDefaultData);

// //   const handleLogin = () => {
// //     const fakeToken = '123456abc';
// //     dispatch(storeToken(fakeToken));
// //   };

// //   const handleLogout = () => {
// //     dispatch(clearToken());
// //   };

// //   const defaultData = [
// //     {id: 1, name: 'abc'},
// //     {id: 2, name: 'xyz'},
// //   ];

// //   const handleDefaultData = () => {
// //     dispatch(setData(defaultData));
// //   };
// //   const handleDefaultDataClear = () => {
// //     dispatch(cleanData(defaultData));
// //   };

// //   return (
// //     <SafeAreaProvider style={{flex: 1}}>
// //       <Loader loading={isLoading} />
// //       <Text style={{borderWidth: 1, padding: 20}} onPress={loginUser}>
// //         Maps
// //       </Text>
// //       <TouchableOpacity onPress={handleLogin}>
// //         <Text style={{borderWidth: 1, padding: 20}}>login</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={handleLogout}>
// //         <Text style={{borderWidth: 1, padding: 20}}>logout</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={handleDefaultData}>
// //         <Text style={{borderWidth: 1, padding: 20}}>default data</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={handleDefaultDataClear}>
// //         <Text style={{borderWidth: 1, padding: 20}}>default dataclear</Text>
// //       </TouchableOpacity>
// //     </SafeAreaProvider>
// //   );
// // };
// // export default Maps;

// // import {Button, View} from 'react-native';
// // import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

// // export default function App() {
// //   const width = useSharedValue(100);

// //   const handlePress = () => {
// //     width.value = withSpring(width.value + 50);
// //   };

// //   return (
// //     <View style={{flex: 1, alignItems: 'center'}}>
// //       <Animated.View
// //         style={{
// //           width,
// //           height: 100,
// //           backgroundColor: 'violet',
// //         }}
// //       />
// //       <Button onPress={handlePress} title="Click me" />
// //     </View>
// //   );
// // }

// // import React from 'react';
// // import {View, Text, TouchableOpacity} from 'react-native';
// // import {
// //   widthPercentageToDP as wp,
// //   heightPercentageToDP as hp,
// // } from 'react-native-responsive-screen';
// // import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

// // const Maps = () => {
// //   const width = useSharedValue(wp(30));
// //   const handlePress = () => {
// //     width.value = withSpring(width.value + 50);
// //   };
// //   return (
// //     <View style={{flex: 1}}>
// //       <Animated.View
// //         style={{
// //           height: hp(10),
// //           width,
// //           marginTop: hp(3),
// //           backgroundColor: 'green',
// //           marginLeft: wp(2),
// //         }}>
// //         <Text>Maps</Text>
// //       </Animated.View>
// //       <TouchableOpacity
// //         style={{borderWidth: 1, marginTop: hp(2)}}
// //         onPress={handlePress}>
// //         <Text>click</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default Maps;

// // import {View, Button, StyleSheet} from 'react-native';
// // import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
// // import {
// //   widthPercentageToDP as wp,
// //   heightPercentageToDP as hp,
// // } from 'react-native-responsive-screen';
// // const Maps = () => {
// //   // const translateY = useSharedValue(0);

// //   // const handlePress = () => {
// //   //   translateY.value = withSpring(translateY.value + 50);
// //   // };

// //   // const translateX = useSharedValue(0);
// //   // const handlePress = () => {
// //   //   translateX.value = withSpring(translateX.value + 50);
// //   // };

// //   const width = useSharedValue(wp(12));
// //   const handlePress = () => {

// //     width.value = withSpring(width.value + 50);
// //   };
// //   return (
// //     <View style={styles.container}>
// //       {/* <Animated.View style={[styles.box, {transform: [{translateY}]}]} /> */}
// //       {/* <Animated.View
// //         style={[styles.box, {transform: [{translateX}]}]}></Animated.View> */}
// //       <Animated.View
// //         style={{
// //           height: hp(6),
// //           width,
// //           backgroundColor: 'green',
// //           borderRadius: wp(10),
// //         }}
// //       />
// //       <Button onPress={handlePress} title="Click me" />
// //     </View>
// //   );
// // };

// // export default Maps;

// // const styles = StyleSheet.create({
// //   box: {
// //     height: hp(10),
// //     // borderWidth: 1,
// //     width: wp(40),
// //     backgroundColor: 'green',
// //   },
// // });

// // import React, {useRef} from 'react';
// // import {View, StyleSheet, Image, Button} from 'react-native';
// // import Animated, {
// //   useSharedValue,
// //   useAnimatedStyle,
// // } from 'react-native-reanimated';

// // const Maps = () => {
// //   const scale = useSharedValue(1); // Initial scale value

// //   // Define the animated style for scaling the image
// //   // const animatedStyle = useAnimatedStyle(() => {
// //   //   return {
// //   //     transform: [{scale: scale.value}],
// //   //   };
// //   // });

// //   const animatedStyle = useAnimatedStyle(() => {
// //     return {
// //       transform: [{scale: scale.value}],
// //     };
// //   });

// //   // Function to handle zoom in
// //   const zoomIn = () => {
// //     // scale.value = Math.min(scale.value * 1.2, 5); // Limit max zoom to 5x
// //     scale.value = Math.min(scale.value * 1.2, 5);
// //   };

// //   const zoomOut = () => {
// //     scale.value = Math.max(scale.value * 0.8, 1);
// //   };

// //   // Function to handle zoom out
// //   // const zoomOut = () => {
// //   //   scale.value = Math.max(scale.value * 0.8, 1); // Limit min zoom to original size
// //   // };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.buttonContainer}>
// //         <Button title="Zoom In" onPress={zoomIn} />
// //         <Button title="Zoom Out" onPress={zoomOut} />
// //       </View>
// //       <Animated.View style={[styles.imageContainer, animatedStyle]}>
// //         {/* <Image
// //           source={{uri: 'https://placekitten.com/800/800'}} // Example image URL
// //           style={styles.image}
// //           resizeMode="contain"
// //         /> */}
// //       </Animated.View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     marginBottom: 20,
// //   },
// //   imageContainer: {
// //     borderWidth: 1,
// //     borderColor: 'black',
// //     width: 60,
// //     height: 60,
// //   },
// //   image: {
// //     width: 100,
// //     height: 100,
// //   },
// // });

// // export default Maps;

// // import React, {useState, useCallback} from 'react';
// // import {View, Button, Text} from 'react-native';
// // import {
// //   widthPercentageToDP as wp,
// //   heightPercentageToDP as hp,
// // } from 'react-native-responsive-screen';
// // import navigationStrings from '../../component/Constants/navigationStrings';

// // const Maps = ({navigation}) => {
// //   // const [count, setCount] = useState(0);
// //   const [count1, setCount1] = useState(0);
// //   console.log('co111', count1);

// //   // const {} = UseContext(ThemeContext);
// //   // const {} = UseContext(ThemeContext);

// //   // Memoizing the increment function
// //   // const increment = useCallback(() => {
// //   //   setCount(prevCount => prevCount + 1);
// //   // }, []); // No dependencies, so it won't change

// //   return (
// //     <View>
// //       {/* <Text>Count: {count}</Text> */}
// //       {/* <Counter onIncrement={increment} /> */}
// //       <Text
// //         onPress={() => setCount1(pre => pre + 1)}
// //         style={{padding: 10, borderWidth: 1, marginTop: 20}}>
// //         ddafas
// //       </Text>

// //       <Text
// //         style={{
// //           fontSize: wp(5),
// //           color: '#000',
// //           marginLeft: wp(8),
// //           borderWidth: 1,
// //           marginTop: hp(4),
// //         }}
// //         onPress={() => navigation.navigate(navigationStrings.ChatExample)}>
// //         Next
// //       </Text>
// //       <Text
// //         style={{borderWidth: 1, marginTop: hp(4)}}
// //         onPress={() => navigation.navigate(navigationStrings.ForwardRef)}>
// //         Next ForwardRef
// //       </Text>
// //       {/* <Text
// //         style={{borderWidth: 1, marginTop: hp(4)}}
// //         onPress={() => navigation.navigate(navigationStrings.UseContext)}>
// //         UseContext Hooks
// //       </Text> */}
// //     </View>
// //   );
// // };
// // export default Maps;

// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   useColorScheme,
// } from 'react-native';
// import React, {useState} from 'react';
// import navigationStrings from '../../component/Constants/navigationStrings';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// const Maps = ({navigation}) => {
//   const handleLayot = event => {
//     console.log(event.nativeEvent);
//   };
//   const [enterValue, setEnterValue] = useState('');

//   const colorSheme = useColorScheme();
//   console.log('colorsheme', colorSheme);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View>
//         <Text>Maps</Text>
//         <Text>Maps</Text>
//         <Text
//           onPress={() => navigation.navigate(navigationStrings.HomeScreentsx)}
//           style={{padding: 20, borderWidth: 1, borderColor: '#000'}}>
//           Maps
//         </Text>
//       </View>

//       <View style={{height: wp(30), width: wp(30), alignSelf: 'center'}}>
//         <Image
//           source={{
//             // uri: 'https://media.istockphoto.com/id/1352825038/photo/professional-male-automotive-engineer-wearing-hard-hat-walking-using-laptop-monitoring.jpg?s=612x612&w=0&k=20&c=l8IJgKUOB6YjZcGYjVzTUi3qkIQP_NmZ9IokPd04q3c=',
//             uri: 'data:image/jpeg;base64,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',
//             // uri: 'data:image/jpeg;base64,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',
//           }}
//           style={{
//             // height: hp(20),
//             // width: wp(30),
//             height: '100%',
//             width: '100%',
//             // alignSelf: 'center',
//             marginTop: hp(4),
//             resizeMode: 'cover',
//           }}
//         />
//       </View>

//       <Text style={{fontSize: wp(4), color: 'red'}} onLayout={handleLayot}>
//         dsfasd
//       </Text>

//       {/* <TextInput
//         placeholder="Enter text"
//         value={enterValue}
//         onChangeText={text => {
//           // if (text?.length >= 10) {
//           //   return;
//           // }
//           setEnterValue(text);
//         }}
//         // caretHidden={true}
//         // cursorColor={'red'}
//         // multiline
//       /> */}

//       {/* <TouchableOpacity
//         onPressIn={() => console.log('Onpress in')}
//         onPressOut={() => console.log('Onpress out')}>
//         <Text>dfasdfasfd</Text>
//       </TouchableOpacity> */}

//       {/* <View style={{flex: 1, height: hp(20), backgroundColor: 'green'}} />
//       <View style={{flexGrow: 1, height: hp(20), backgroundColor: 'red'}} />
//       <View
//         style={{flexShrink: 1, height: hp(20), backgroundColor: 'yellow'}}
//       />
//       <View style={{flex: 1, height: hp(20), backgroundColor: 'blue'}} /> */}
//     </SafeAreaView>
//   );
// };

// export default Maps;

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Maps = () => {
  const [date, setDate] = useState(new Date());
  const [sessions, setSessions] = useState([]);
  const [isAudio, setIsAudio] = useState(true);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    generateAvailableSessions();
  }, [date]);

  const generateAvailableSessions = () => {
    const now = new Date();
    now.setSeconds(0, 0);
    const nextHour = new Date(now);
    nextHour.setMinutes(0);
    nextHour.setHours(now.getHours() + 1);

    const availableSessions = [];
    for (let i = 30; i < 60; i += 15) {
      let sessionTime = new Date(nextHour);
      sessionTime.setMinutes(i);
      availableSessions.push(sessionTime);
    }
    for (let i = 0; i < 60; i += 15) {
      let sessionTime = new Date(nextHour);
      sessionTime.setHours(nextHour.getHours() + 1);
      sessionTime.setMinutes(i);
      availableSessions.push(sessionTime);
    }
    setSessions(availableSessions);
  };

  const formatTime = time => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Create Session</Text>
      <Text>Date: {date.toDateString()}</Text>
      <Text>Select Time:</Text>
      {sessions.map((session, index) => (
        <TouchableOpacity
          key={index}
          style={{padding: 10, margin: 5, backgroundColor: '#ddd'}}>
          <Text>{formatTime(session)}</Text>
        </TouchableOpacity>
      ))}
      <Text>Audio Call</Text>
      <Switch value={isAudio} onValueChange={setIsAudio} />
      <Text>Session Amount: ₹120</Text>
      <Text>Video Call</Text>
      <Switch value={isVideo} onValueChange={setIsVideo} />
      <Text>Session Amount: ₹240</Text>
    </View>
  );
};

export default Maps;
