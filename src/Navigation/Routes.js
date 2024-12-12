// // import {NavigationContainer} from '@react-navigation/native';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';

// // import {
// //   InitialScreen,
// //   LoginScreen,
// //   HomeScreen,
// //   SignUpScreen,
// //   Splash,
// // } from '../screen';
// // import navigationStrings from '../component/Constants/navigationStrings';
// // import AuthStack from './AuthStack';
// // import MainStack from './MainStack';
// // import {useSelector} from 'react-redux';
// // const Stack = createNativeStackNavigator();

// // const Routes = () => {
// //   const mainRoute = useSelector(state => state.route);

// //   const screenComponents = {
// //     [navigationStrings.Splash]: Splash,
// //     [navigationStrings.login]: MainStack(Stack),
// //     ['navigationStrings.HomeScreen']: AuthStack(Stack),
// //   };
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName={mainRoute}>
// //         {/* {mainRoute ? MainStack(Stack) : AuthStack(Stack)} */}
// //         {Object.entries(screenComponents).map(([routeName, Component]) => (
// //           <Stack.Screen
// //             key={routeName}
// //             name={routeName}
// //             component={Component}
// //           />
// //         ))}
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };
// // export default Routes;

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {
//   InitialScreen,
//   LoginScreen,
//   HomeScreen,
//   SignUpScreen,
//   Splash,
// } from '../screen';
// import navigationStrings from '../component/Constants/navigationStrings';
// import AuthStack from './AuthStack';
// import MainStack from './MainStack';
// import {useSelector} from 'react-redux';
// const Stack = createNativeStackNavigator();

// const Routes = () => {
//   const mainRoute = useSelector(state => state.route);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>

//         {mainRoute ? MainStack(Stack) : AuthStack(Stack)}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default Routes;

// Routes.js
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useSelector} from 'react-redux';
// import AuthStack from './AuthStack';
// import MainStack from './MainStack';

// const Stack = createNativeStackNavigator();

// const Routes = () => {
//   const mainRoute = useSelector(state => state.route);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* {mainRoute ? MainStack(Stack) : AuthStack(Stack)} */}

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Routes;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import navigationStrings from '../component/Constants/navigationStrings';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import TabRoutes from './TabRoutes';
import {Splash} from '../screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const mainRoute = useSelector(state => state.route.mainRoute);

  switch (mainRoute) {
    case navigationStrings.routes.splash:
      return (
        <Stack.Navigator
          initialRouteName={navigationStrings.routes.splash}
          screenOptions={{
            headerShown: false,
            navigationBarHidden: true,
            orientation: 'portrait',
          }}>
          <Stack.Screen
            name={navigationStrings.routes.splash}
            component={Splash}
          />
        </Stack.Navigator>
      );

    case navigationStrings.routes.logout:
      return (
        <Stack.Navigator
          // initialRouteName={navigationStrings.LoginScreen}
          screenOptions={{
            headerShown: false,
            orientation: 'portrait',
          }}>
          <Stack.Screen name={'AuthStack'} component={AuthStack} />
        </Stack.Navigator>
      );

    case navigationStrings.routes.login:
      return (
        <Stack.Navigator
          // initialRouteName={navigationStrings.HomeScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={navigationStrings.routes.login}
            component={TabRoutes}
          />
        </Stack.Navigator>
      );

    default:
      return (
        <Stack.Navigator
          initialRouteName={navigationStrings.routes.splash}
          screenOptions={{
            headerShown: false,
            orientation: 'portrait',
          }}>
          <Stack.Screen
            name={navigationStrings.routes.splash}
            component={Splash}
          />
        </Stack.Navigator>
      );
  }
};

export default Routes;
