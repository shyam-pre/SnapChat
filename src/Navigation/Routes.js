import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {InitialScreen, LoginScreen, HomeScreen, SignUpScreen} from '../screen';
import navigationStrings from '../screen/Constants/navigationStrings';
import AuthStack from './AuthStack';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
