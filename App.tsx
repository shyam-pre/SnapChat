// // import 'react-native-gesture-handler';
// // import React, {useEffect} from 'react';
// // import {
// //   View,
// // } from 'react-native';
// // import Routes from './src/Navigation/Routes';
// // import {Provider} from 'react-redux';
// // import {store} from './src/redux/store/store';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {setData} from './src/redux/defaultDataSlice';
// // import messaging from '@react-native-firebase/messaging';
// // import NotificationHandler from './src/firebase/NotificationHandler';

// // const App = () => {
// //   useEffect(() => {
// //     const unsubscribe = messaging().onTokenRefresh(async newToken => {
// //       console.log('Token refreshed:', newToken);
// //       await setData('fcmToken', newToken);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   return (
// //     <View style={{flex: 1}}>
// //       <NotificationHandler />
// //       <NavigationContainer>
// //         <Provider store={store}>
// //           <Routes />
// //         </Provider>
// //       </NavigationContainer>
// //     </View>
// //   );
// // };

// // export default App;
// import 'react-native-gesture-handler';
// import React, {useEffect} from 'react';
// import {ActivityIndicator, Linking, Platform, View} from 'react-native';
// import Routes from './src/Navigation/Routes';
// import {Provider} from 'react-redux';
// import {store} from './src/redux/store/store';
// import {NavigationContainer} from '@react-navigation/native';
// import messaging from '@react-native-firebase/messaging';
// import NotificationHandler from './src/firebase/NotificationHandler';
// import navigationStrings from './src/component/Constants/navigationStrings';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AppContext} from './src/screen/Hooks/useRef/AppContext';

// // const NAVIGATION_IDS = [navigationStrings.Maps, navigationStrings.Camera];

// // function buildDeepLinkFromNotificationData(data) {
// //   const navigationId = data?.notification.title;
// //   if (!NAVIGATION_IDS.includes(navigationId)) {
// //     console.warn('Unverified navigationId', navigationId);
// //     return null;
// //   }
// //   if (navigationId == navigationStrings.Maps) {
// //     return `mychat://${navigationStrings.Maps}`;
// //   }
// //   const chatId = data?.chatId;
// //   if (typeof chatId === navigationStrings.Camera) {
// //     return `myapp://${navigationStrings.Camera}/${chatId}`;
// //   }
// //   // if (navigationId == navigationStrings.Camera) {
// //   //   return `mychat://${navigationStrings.Camera}`;
// //   // }
// //   console.warn('Missing postId');
// //   return null;
// // }

// // const linking = {
// //   prefixes: ['mychat://'],
// //   config: {
// //     initialRouteName: navigationStrings.Maps,
// //     screens: {
// //       [navigationStrings.Maps]: navigationStrings.Maps,
// //       [navigationStrings.Camera]: navigationStrings.Camera,
// //     },
// //   },

// //   async getInitialURL() {
// //     const url = await Linking.getInitialURL();
// //     if (typeof url === 'string') {
// //       return url;
// //     }
// //     //getInitialNotification: When the application is opened from a quit state.
// //     const message = await messaging().getInitialNotification();
// //     const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
// //     if (typeof deeplinkURL === 'string') {
// //       return deeplinkURL;
// //     }
// //   },

// //   subscribe() {
// //     const onReceiveURL = ({url}) => listener(url);

// //     // Listen to incoming links from deep linking
// //     const linkingSubscription = Linking.addEventListener('url', onReceiveURL);

// //     //onNotificationOpenedApp: When the application is running, but in the background.
// //     const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
// //       const url = buildDeepLinkFromNotificationData(remoteMessage.data);
// //       if (typeof url === 'string') {
// //         listener(url);
// //       }
// //     });

// //     return () => {
// //       linkingSubscription.remove();
// //       unsubscribe();
// //     };
// //   },
// // };

// const App = () => {
//   // useEffect(() => {
//   //   // Token refresh handler
//   //   const unsubscribeTokenRefresh = messaging().onTokenRefresh(
//   //     async newToken => {
//   //       console.log('FCM token refreshed:', newToken);
//   //       // Save new token to storage or server
//   //     },
//   //   );

//   //   console.log('ddddddddd', Platform.Version);

//   //   return () => unsubscribeTokenRefresh();
//   // }, []);

//   // const requestUserPermission = async () => {
//   //   if (Platform.OS === 'ios') {
//   //     const authStatus = await messaging().requestPermission();
//   //     const enabled =
//   //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//   //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   //     if (enabled) {
//   //       console.log('Authorization status:', authStatus);
//   //     } else {
//   //       console.log('Permission denied for notifications on iOS');
//   //     }
//   //   } else if (Platform.OS === 'android') {
//   //     if (Platform.Version >= 33) {
//   //       const granted = await PermissionsAndroid.request(
//   //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//   //       );
//   //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//   //         await getFCMToken(); // Register for FCM token
//   //       } else {
//   //         Alert.alert('', 'Permission denied for notification on Android');
//   //       }
//   //     } else {
//   //       console.log(
//   //         'POST_NOTIFICATIONS permission not required for Android 30.',
//   //       );
//   //       await getFCMToken(); // Register for FCM token
//   //     }
//   //   }
//   // };

//   // const getFCMToken = async () => {
//   //   try {
//   //     const storedToken = await AsyncStorage.getItem('fcmToken');
//   //     if (storedToken) {
//   //       console.log('FCM Token already exists:', storedToken);
//   //     } else {
//   //       const newToken = await messaging().getToken();
//   //       if (newToken) {
//   //         console.log('New FCM Token:', newToken);
//   //         await AsyncStorage.setItem('fcmToken', newToken);
//   //       } else {
//   //         console.log('Failed to retrieve FCM Token');
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching FCM Token:', error);
//   //   }
//   // };

//   // const displayNotifi = async remoteMessage => {
//   //   const channelId = await notifee.createChannel({
//   //     id: 'default',
//   //     name: 'Default Channel',
//   //     vibration: true,
//   //     importance: AndroidImportance.HIGH,
//   //     sound: 'notification_sound', // Ensure this matches the filename in /res/raw
//   //     vibrationPattern: [300, 500],
//   //   });

//   //   await notifee.displayNotification({
//   //     title: remoteMessage.notification?.title || 'Default Title',
//   //     body: remoteMessage.notification?.body || 'Default Body',
//   //     android: {
//   //       channelId,
//   //       importance: AndroidImportance.HIGH,
//   //       vibration: true,
//   //       sound: 'notification_sound',
//   //       vibrationPattern: [300, 500],
//   //     },

//   //     //  ios: {
//   //     //    sound: 'noti.mp3',
//   //     //    attachments: [
//   //     //      {
//   //     //        // Remote image
//   //     //        url: image,
//   //     //      },
//   //     //    ],
//   //     //    foregroundPresentationOptions: {
//   //     //      badge: true,
//   //     //      sound: true,
//   //     //      banner: true,
//   //     //      list: true,
//   //     //    },
//   //     //  },
//   //   });
//   // };

//   //   useEffect(() => {
//   //     requestUserPermission();
//   // getFCMToken;
//   //     const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
//   //       console.log('Foreground notification:', remoteMessage);
//   //       if (remoteMessage.notification) {
//   //         buildDeepLinkFromNotificationData(remoteMessage);
//   //         await displayNotifi(remoteMessage);
//   //       }
//   //     });

//   //     return () => unsubscribeForeground();
//   //   }, []);
//   return (
//     <View style={{flex: 1}}>
//       {/* <NotificationHandler /> */}
//       <NavigationContainer
//       // linking={linking}
//       // fallback={<ActivityIndicator animating />}
//       >
//         <Provider store={store}>
//           <AppContext>
//             <Routes />
//           </AppContext>
//         </Provider>
//       </NavigationContainer>
//     </View>
//   );
// };

// export default App;

// import {View, Text} from 'react-native';
// import React from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import HomeScreen from './src1/screen/HomeScreen';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <HomeScreen />
//     </SafeAreaView>
//   );
// };

// export default App;

import React from 'react';
import {Provider} from 'react-redux';
// import {store} from './redux/store'; // Ensure correct path
// import {AllApi} from './redux/AllApi';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {store} from './src1/redux/store/store';
import {AllApiSlice} from './src1/redux/ApiSlice/AllApiSlice';
import HomeScreen from './src1/screen/HomeScreen';
// import HomeScreen from './screens/HomeScreen'; // Your screen

const App = () => {
  return (
    // <Provider store={store}>
    //   <ApiProvider api={AllApiSlice}>
    //     <HomeScreen />
    //   </ApiProvider>
    // </Provider>
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
