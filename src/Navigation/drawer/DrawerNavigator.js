// import {View, Text} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {HomeScreen} from '../screen';
// import navigationStrings from '../component/Constants/navigationStrings';
// import Profile from '../screen/profile/Profile';
// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName={navigationStrings.HomeScreen}
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Drawer.Screen
//         component={HomeScreen}
//         name={navigationStrings.HomeScreen}
//         // options={{title: 'Home'}}
//         options={({navigation}) => ({
//           title: 'Awesome app',
//           headerLeft: () => (
//             <DrawerButton onPress={() => navigation.toggleDrawer()} />
//           ),
//         })}
//       />
//       <Drawer.Screen
//         component={Profile}
//         name={navigationStrings.Profile}
//         options={{title: 'Profile'}}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../../screen';
import navigationStrings from '../../component/Constants/navigationStrings';
import Profile from '../../screen/profile/Profile';
import CustomDrawerContent from './CustomDrawerContent';
import TabRoutes from '../TabRoutes';
import PP from '../../screen/PP';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Add this for icons

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // initialRouteName={navigationStrings.HomeScreen}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          width: '90%',
          height: '100%',
          borderRadius: 0, // Remove corner radius
          elevation: 0, // Remove shadow (Android)
          // shadowOpacity: 0, // Remove shadow (iOS)
        },
        // overlayColor: '#000',
        lazy: true, // Loads screens only when they are accessed
        gestureEnabled: true, // Ensure gestures are enabled
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name={'tabRoute'}
        component={TabRoutes}
        options={{
          gestureEnabled: true, // Enable swipe gestures
          headerShown: false,
        }}
      />
      <Drawer.Screen component={PP} name={'PP'} />
      <Drawer.Screen component={Profile} name={navigationStrings.Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
