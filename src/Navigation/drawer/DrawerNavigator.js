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
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Add this for icons

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={navigationStrings.HomeScreen}
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeScreen}
        name={navigationStrings.HomeScreen}
      />
      <Drawer.Screen component={Profile} name={navigationStrings.Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
