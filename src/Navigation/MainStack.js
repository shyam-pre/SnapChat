// import React from 'react';
// import navigationStrings from '../component/Constants/navigationStrings';
// import TabRoutes from './TabRoutes';

// export default function (Stack) {
//   return (
//     <>
//       <Stack.Screen
//         name={'TabRoutes'}
//         component={TabRoutes}
//         options={{headerShown: false}}
//       />
//     </>
//   );
// }

// MainStack.js
import React from 'react';
import navigationStrings from '../component/Constants/navigationStrings';
import TabRoutes from './TabRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name={'TabRoutes'}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
};
export default MainStack;
