import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import imagePath from '../component/Constants/imagePath';
import navigationStrings from '../component/Constants/navigationStrings';
import {Camera, Chat, Maps, Storages} from '../screen';
import DrawerNavigator from './drawer/DrawerNavigator';
const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      // tabBar={props => <BottomTabBar {...props} />}
      initialRouteName={navigationStrings.Storages}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#fff'},
        // headerShown: false,
      }}>
      <BottomTab.Screen
        name={'DrawerNavigator'}
        component={DrawerNavigator}
        options={{
          headerShown: false,
          // tabBarLabel: 'dfdfdf',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? imagePath.ic_map_bold : imagePath.ic_map}
              style={{
                tintColor: focused ? 'green' : '#000',
                height: hp(3),
                width: wp(6),
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.Maps}
        component={Maps}
        options={{
          // tabBarLabel: 'dfdfdf',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? imagePath.ic_map_bold : imagePath.ic_map}
              style={{
                tintColor: focused ? 'green' : '#000',
                height: hp(3),
                width: wp(6),
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.Chat}
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? imagePath.ic_chat : imagePath.ic_chat_bold}
              style={{
                tintColor: focused ? 'green' : '#000',
                height: hp(3),
                width: wp(6),
                // marginTop: hp(-1),
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.Camera}
        component={Camera}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? imagePath.ic_camera_bold : imagePath.ic_camera}
              style={{
                tintColor: focused ? 'green' : '#000',
                height: hp(3),
                width: wp(6),
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.Storages}
        component={Storages}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused ? imagePath.ic_storage_bold : imagePath.ic_storage
              }
              style={{
                tintColor: focused ? 'green' : '#000',
                height: hp(3),
                width: wp(6),
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;

// import React from 'react';
// import {Image} from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import imagePath from '../component/Constants/imagePath';
// import navigationStrings from '../component/Constants/navigationStrings';
// import {Camera, Chat, Maps, Storages} from '../screen';
// import CustomTabBar from './CustomTabBar';

// const BottomTab = createBottomTabNavigator();

// const TabRoutes = () => {
//   return (
//     <BottomTab.Navigator
//       tabBar={props => <CustomTabBar {...props} />} // Use the custom tab bar here
//       initialRouteName={navigationStrings.Maps}
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {backgroundColor: '#fff'},
//       }}>
//       <BottomTab.Screen
//         name={navigationStrings.Maps}
//         component={Maps}
//         options={{
//           tabBarLabel: 'Maps',
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={imagePath.ic_map}
//               style={{
//                 tintColor: focused ? 'green' : '#000',
//                 height: hp(3),
//                 width: wp(6),
//               }}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name={navigationStrings.Chat}
//         component={Chat}
//         options={{
//           tabBarLabel: 'Chat',
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={imagePath.ic_chat}
//               style={{
//                 tintColor: focused ? 'green' : '#000',
//                 height: hp(3),
//                 width: wp(6),
//               }}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name={navigationStrings.Camera}
//         component={Camera}
//         options={{
//           tabBarLabel: 'Camera',
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={imagePath.ic_camera}
//               style={{
//                 tintColor: focused ? 'green' : '#000',
//                 height: hp(3),
//                 width: wp(6),
//               }}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name={navigationStrings.Storages}
//         component={Storages}
//         options={{
//           tabBarLabel: 'Storages',
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={imagePath.ic_storage}
//               style={{
//                 tintColor: focused ? 'green' : '#000',
//                 height: hp(3),
//                 width: wp(6),
//               }}
//             />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

// export default TabRoutes;
