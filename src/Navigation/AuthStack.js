import navigationStrings from '../screen/Constants/navigationStrings.js';
import {
  LoginScreen,
  SignUpScreen,
  HomeScreen,
  InitialScreen,
} from '../screen/index.js';

export default Stack => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings?.InitialScreen}
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings?.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings?.SignUpScreen}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings?.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </>
  );
};
