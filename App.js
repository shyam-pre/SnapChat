// import {View, Text} from 'react-native';
// import React, {useCallback} from 'react';

// const App = () => {
//   let a = [10, 20, 30, 40, 5, 30, 40, 40];
//   let uniqueValues = a.filter(
//     (value, index, self) => self.indexOf(value) === index,
//   );

//   const handdlePress = useCallback(() => {
//     return handdleClick;
//   }, []);
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// };

// export default App;
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
// import {requestUserPermission} from './src/Utils/NotificationServices';
// import messaging from '@react-native-firebase/messaging';
// import setupNotifications from './src/firebase/usePushNotification';
// import usePushNotification from './src/firebase/usePushNotification';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {NavigationContainer} from '@react-navigation/native';
import usePushNotification from './src/firebase/usePushNotification';

const App = () => {
  // useEffect(() => {
  //   // const unsubscribe = messaging().onMessage(async remoteMessage => {
  //   //   console.log(':;;ppppppppppp', JSON.stringify(remoteMessage));

  //   //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   // });
  //   // return unsubscribe;
  //   usePushNotification()
  //   getFCMToken()
  // }, []);

  // useEffect(() => {
  //   usePushNotification();
  // }, []);

  // const getFCMToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     console.log('Your Firebase Token is:', fcmToken);
  //   } else {
  //     console.log('Failed', 'No token received');
  //   }
  // };

  return (
    <View style={{flex: 1}}>
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
      {/* <Text>dsa</Text> */}
    </View>
  );
};

export default App;

// import React, {useEffect} from 'react';
// import {View} from 'react-native';
// import Routes from './src/Navigation/Routes';
// import usePushNotification from './src/firebase/usePushNotification';

// const App = () => {
//   console.log('dddddddddddddddddddgggg', usePushNotification);

//   const {
//     requestUserPermission,
//     getFCMToken,
//     listenToForegroundNotifications,
//     onNotificationOpenedAppFromBackground,
//   } = usePushNotification();

//   useEffect(() => {
//     const initializeNotifications = async () => {
//       await requestUserPermission(); // Request notification permissions
//       await getFCMToken(); // Fetch FCM token
//       await listenToForegroundNotifications(); // Listen to notifications
//       await onNotificationOpenedAppFromBackground(); // Listen to notifications
//     };

//     initializeNotifications();
//   }, []);

//   return (
//     <View style={{flex: 1}}>
//       <Routes />
//     </View>
//   );
// };

// export default App;

// import React, {useEffect} from 'react';
// import {View} from 'react-native';
// import Routes from './src/Navigation/Routes';
// import usePushNotification from './src/firebase/usePushNotification';
// import messaging from '@react-native-firebase/messaging';
// import {AppProvider} from './src/screen/AppContext';

// const App = () => {
//   const {requestUserPermission, getFCMToken, listenToForegroundNotifications} =
//     usePushNotification();

//   useEffect(() => {
//     const initializeNotifications = async () => {
//       // const getFCMToken = async () => {
//       //   const fcmToken = await messaging().getToken();
//       //   if (fcmToken) {
//       //     console.log('Your Firebase Token is:qqqqqqq', fcmToken);
//       //   } else {
//       //     console.log('Failed', 'No token received sssssss');
//       //   }
//       // };
//       await requestUserPermission(); // Request notification permissions
//       await getFCMToken(); // Fetch FCM token
//       listenToForegroundNotifications(); // Listen to notifications
//     };

//     initializeNotifications();
//   }, []);

//   return (
//     <View style={{flex: 1}}>
//       <AppProvider>
//         <Routes />
//       </AppProvider>
//     </View>
//   );
// };

// export default App;
