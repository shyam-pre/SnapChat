import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onbording1 from '../screen/onbording/Onbording1';
import navigationStrings from '../component/Constants/navigationStrings';

const Stack = createNativeStackNavigator();

const OnbordindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.Onbording1}
        component={Onbording1}
      />
    </Stack.Navigator>
  );
};

export default OnbordindStack;
