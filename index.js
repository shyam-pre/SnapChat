// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance} from '@notifee/react-native';

// const displayNotifi = async remoteMessage => {
//   const uniqueId = Date.now().toString();
//   const channelId = await notifee.createChannel({
//     id: `channel-${uniqueId}`,
//     name: `channel-${uniqueId}`,
//     importance: AndroidImportance.HIGH,
//     sound: 'notification_sound',
//   });

//   await notifee.displayNotification({
//     id: remoteMessage?.messageId || `$notification-${uniqueId}`, // Ensure unique ID
//     title: remoteMessage.notification?.title || 'Default Title',
//     body: remoteMessage.notification?.body || 'Default Body',
//     android: {
//       channelId,
//       importance: AndroidImportance.HIGH,
//       sound: 'notification_sound',
//     },

//     pressAction: {
//       id: 'default',
//     },
//   });
// };

// // Background notification handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Background message received:xxxxx', remoteMessage);
//   if (remoteMessage.notification) {
//     await displayNotifi(remoteMessage);
//   }
// });

// // Register the app component
// AppRegistry.registerComponent(appName, () => App);

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance} from '@notifee/react-native';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Background message received:', remoteMessage);
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     importance: AndroidImportance.HIGH,
//     sound: 'notification_sound', // Ensure this matches the filename in /res/raw
//   });

//   await notifee.displayNotification({
//     title: remoteMessage.notification?.title || 'Default Title',
//     body: remoteMessage.notification?.body || 'Default Body',
//     android: {
//       channelId,
//       importance: AndroidImportance.HIGH,
//       sound: 'notification_sound',
//     },
//   });
// });

// AppRegistry.registerComponent(appName, () => App);

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance} from '@notifee/react-native';

// // Background notification handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Background message received:', remoteMessage);

//   // Create a channel if it doesn't exist
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     importance: AndroidImportance.HIGH,
//     sound: 'notification_sound', // Ensure this matches the filename in /res/raw
//   });

//   // Display notification using Notifee
//   await notifee.displayNotification({
//     title: remoteMessage.notification?.title || 'Default Title',
//     body: remoteMessage.notification?.body || 'Default Body',
//     android: {
//       channelId,
//       importance: AndroidImportance.HIGH,
//       sound: 'notification_sound',
//     },
//   });
// });

// // Register the app component
// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './App';
// import App1 from './App1';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance} from '@notifee/react-native';

// Background notification handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Background message received:', remoteMessage);

//   // Create a notification channel if it doesn't exist
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     importance: AndroidImportance.HIGH,
//     sound: 'notification_sound', // Ensure this sound file exists
//   });

//   // Display notification using Notifee
//   if (remoteMessage.data.title) {
//     await notifee.displayNotification({
//       title: remoteMessage.data.title,
//       body: remoteMessage.data.body,
//       android: {
//         channelId,
//         importance: AndroidImportance.HIGH,
//         sound: 'notification_sound',
//         onlyAlertOnce: true,
//       },
//     });
//   }
// });

// Register the app component
AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => App1);
