// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   PermissionsAndroid,
//   Alert,
// } from 'react-native';
// import Routes from './src/Navigation/Routes';
// import {requestUserPermission} from './src/Utils/NotificationServices';
// import messaging from '@react-native-firebase/messaging';
// import setupNotifications from './src/firebase/usePushNotification';
// import usePushNotification from './src/firebase/usePushNotification';

// const App = () => {
//   // useEffect(() => {
//   //   // const unsubscribe = messaging().onMessage(async remoteMessage => {
//   //   //   console.log(':;;ppppppppppp', JSON.stringify(remoteMessage));

//   //   //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//   //   // });
//   //   // return unsubscribe;
//   //   usePushNotification()
//   //   getFCMToken()
//   // }, []);

//   useEffect(() => {
//     usePushNotification()
//   },[])

//   const getFCMToken = async () => {
//     const fcmToken = await messaging().getToken();
//     if (fcmToken) {
//       console.log('Your Firebase Token is:', fcmToken);
//     } else {
//       console.log('Failed', 'No token received');
//     }
//   };
//   return (
//     <View style={{flex: 1}}>
//       <Routes />
//       {/* <Text>dsa</Text> */}
//     </View>
//   );
// };

// export default App;

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

import React, {useEffect} from 'react';
import {View} from 'react-native';
import Routes from './src/Navigation/Routes';
import usePushNotification from './src/firebase/usePushNotification';
import messaging from '@react-native-firebase/messaging';


const App = () => {
  const {
    requestUserPermission,
    getFCMToken,
    listenToForegroundNotifications,
  } = usePushNotification();

  useEffect(() => {
    const initializeNotifications = async () => {
      // const getFCMToken = async () => {
      //   const fcmToken = await messaging().getToken();
      //   if (fcmToken) {
      //     console.log('Your Firebase Token is:qqqqqqq', fcmToken);
      //   } else {
      //     console.log('Failed', 'No token received sssssss');
      //   }
      // };
      await requestUserPermission(); // Request notification permissions
      await getFCMToken(); // Fetch FCM token
      listenToForegroundNotifications(); // Listen to notifications
    };

    initializeNotifications();

  }, []);

  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};

export default App;

