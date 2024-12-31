import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {setMainRoute} from '../../redux/action/authAction';
import navigationStrings from '../../component/Constants/navigationStrings';
import {async_key, storeData} from '../../provider/UserPreference';
import {useDispatch} from 'react-redux';

const Onbording1 = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        style={{borderWidth: 1}}
        onPress={() => {
          dispatch(setMainRoute({mainRoute: navigationStrings.routes.logout}));
          storeData(async_key.status, true);
        }}>
        <Text>Onbording1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onbording1;
