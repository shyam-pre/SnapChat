import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InitialScreen, LoginScreen, SignUpScreen} from '../screen';
import navigationStrings from '../component/Constants/navigationStrings';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // orientation: 'portrait',
      }}>
      <Stack.Screen
        name={navigationStrings.InitialScreen}
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SignUpScreen}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

// import navigationStrings from '../component/Constants/navigationStrings.js';
// import {
//   LoginScreen,
//   SignUpScreen,
//   HomeScreen,
//   InitialScreen,
//   Splash,
// } from '../screen/index.js';

// export default Stack => {
//   return (
//     <>
//       <Stack.Screen
//         name={navigationStrings?.Splash}
//         component={Splash}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name={navigationStrings?.InitialScreen}
//         component={InitialScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name={navigationStrings?.LoginScreen}
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name={navigationStrings?.SignUpScreen}
//         component={SignUpScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name={navigationStrings?.HomeScreen}
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//     </>
//   );
// };
