// import React, {useEffect} from 'react';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance} from '@notifee/react-native';
// import {Alert, PermissionsAndroid, Platform} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const NotificationHandler = () => {
//   const requestUserPermission = async () => {
//     if (Platform.OS === 'ios') {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status:', authStatus);
//       } else {
//         console.log('Permission denied for notifications on iOS');
//       }
//     } else if (Platform.OS === 'android') {
//       if (Platform.Version >= 33) {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           await getFCMToken(); // Register for FCM token
//         } else {
//           Alert.alert('', 'Permission denied for notification on Android');
//         }
//       } else {
//         console.log(
//           'POST_NOTIFICATIONS permission not required for Android 30.',
//         );
//         await getFCMToken(); // Register for FCM token
//       }
//     }
//   };

//   const getFCMToken = async () => {
//     try {
//       const storedToken = await AsyncStorage.getItem('fcmToken');
//       if (storedToken) {
//         console.log('FCM Token already exists:', storedToken);
//       } else {
//         const newToken = await messaging().getToken();
//         if (newToken) {
//           console.log('New FCM Token:', newToken);
//           await AsyncStorage.setItem('fcmToken', newToken);
//         } else {
//           console.log('Failed to retrieve FCM Token');
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching FCM Token:', error);
//     }
//   };

//   const displayNotifi = async remoteMessage => {
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//       vibration: true,
//       importance: AndroidImportance.HIGH,
//       sound: 'notification_sound', // Ensure this matches the filename in /res/raw
//       vibrationPattern: [300, 500],
//     });

//     await notifee.displayNotification({
//       title: remoteMessage.notification?.title || 'Default Title',
//       body: remoteMessage.notification?.body || 'Default Body',
//       android: {
//         channelId,
//         importance: AndroidImportance.HIGH,
//         vibration: true,
//         onlyAlertOnce: true,
//         sound: 'notification_sound',
//         vibrationPattern: [300, 500],
//       },

//       // ios: {
//       //   sound: 'noti.mp3',
//       //   attachments: [
//       //     {
//       //       // Remote image
//       //       url: image,
//       //     },
//       //   ],
//       //   foregroundPresentationOptions: {
//       //     badge: true,
//       //     sound: true,
//       //     banner: true,
//       //     list: true,
//       //   },
//       // },
//     });
//   };

//   useEffect(() => {
//     requestUserPermission();

//     const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
//       console.log('Foreground notification:', remoteMessage);
//       if (remoteMessage.notification) {
//         await displayNotifi(remoteMessage);
//       }
//     });

//     return () => unsubscribeForeground();
//   }, []);
// };

// export default NotificationHandler;

import {View, Text} from 'react-native';
import React from 'react';

const NotificationHandler = () => {
  return (
    <View>
      <Text>NotificationHandler</Text>
    </View>
  );
};

export default NotificationHandler;
