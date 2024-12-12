// import messaging from '@react-native-firebase/messaging';
// import notifee, {
//   AndroidImportance,
//   AuthorizationStatus,
// } from '@notifee/react-native';
// // import {stripHtmlTags} from 'react-native-render-html';

// // Request permission for receiving notifications (if not already granted)
// async function requestNotificationPermission() {
//   const authStatus = await messaging().requestPermission();

//   const aa = await notifee.requestPermission();

//   return authStatus === messaging.AuthorizationStatus.AUTHORIZED;
// }

// // Initialize notification listeners
// async function initializeNotificationListeners() {
//   // Create a channel (required for Android)
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     vibration: true,
//     vibrationPattern: [300, 500],
//     sound: 'android_app_src_main_res_raw_noti',
//     importance: AndroidImportance.HIGH,
//   });

//   // Handle foreground notifications
//   const unsubscribe1 = messaging().onMessage(async remoteMessage => {
//     // Handle the notification payload here
//     const {title, body} = remoteMessage.notification;
//     console.log('remoteMessage.notification', remoteMessage);
//     const {image} = remoteMessage.data;

//     // Display a notification
//     await notifee.displayNotification({
//       title,
//       body,

//       android: {
//         channelId,
//         sound: 'android_app_src_main_res_raw_noti',
//         vibrationPattern: [300, 500],
//         pressAction: {
//           id: 'default',
//         },
//       },

//       ios: {
//         sound: 'android_app_src_main_res_raw_noti.mp3',
//         attachments: [
//           {
//             // Remote image
//             url: image,
//           },
//         ],
//         foregroundPresentationOptions: {
//           badge: true,
//           sound: true,
//           banner: true,
//           list: true,
//         },
//       },
//     });
//   });

//   messaging().setBackgroundMessageHandler(async remoteMessage => {

//     const stripHtmlTags = html => {
//       // Regular expression to remove HTML tags
//       // return html.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');
//       return html.replace(/<[^>]*>/g, '').replace(/<\/>/g, '');
//     };
//     // Handle the notification payload here
//     let {title, body} = remoteMessage.notification;

//     // Strip HTML tags from the body
//     body = stripHtmlTags(body);

//     // Display a notification using Notifee
//     await notifee.displayNotification({
//       title,
//       body,

//       android: {
//         channelId,
//         sound: 'android_app_src_main_res_raw_noti',
//         vibrationPattern: [300, 500],
//         pressAction: {
//           id: 'default',
//         },
//       },

//       ios: {
//         sound: 'android_app_src_main_res_raw_noti.mp3',
//         foregroundPresentationOptions: {
//           badge: true,
//           sound: true,
//           banner: true,
//           list: true,
//         },
//       },
//     });
//   });
// }

// // Call this function to initialize notification handling
// async function setupNotifications() {
//   const permissionGranted = await requestNotificationPermission();

//   console.log(permissionGranted);

//   if (permissionGranted) {
//     // Initialize notification listeners
//     initializeNotificationListeners();
//   }
// }

// export default setupNotifications;
import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';

const usePushNotification = () => {
  const requestUserPermission = async () => {
    if (Platform.OS === 'ios') {
      //Request iOS permission
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    } else if (Platform.OS === 'android') {
      //Request Android permission (For API level 33+, for 32 or below is not required)
      const res = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }
  };

  const getFCMToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Your Firebase Token is:', fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };

  const listenToForegroundNotifications = async () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('LLYYMMMMMMMMMMM forground', remoteMessage);

      console.log(
        'A new message arrived! (FOREGROUND)',
        JSON.stringify(remoteMessage),
      );
    });
    return unsubscribe;
  };

  const listenToBackgroundNotifications = async () => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log('LLYYMMMMMMMMMMM backgorud', remoteMessage);

        console.log(
          'A new message arrived! (BACKGROUND)',
          JSON.stringify(remoteMessage),
        );
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromBackground = async () => {
    const unsubscribe = messaging().onNotificationOpenedApp(
      async remoteMessage => {
        console.log(
          'App opened from BACKGROUND by tapping notification:',
          JSON.stringify(remoteMessage),
        );
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromQuit = async () => {
    const message = await messaging().getInitialNotification();
    console.log('L888888888888888', message);

    if (message) {
      console.log(
        'App opened from QUIT by tapping notification:',
        JSON.stringify(message),
      );
    }
  };

  return {
    requestUserPermission,
    getFCMToken,
    listenToForegroundNotifications,
    listenToBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  };
};

export default usePushNotification;
