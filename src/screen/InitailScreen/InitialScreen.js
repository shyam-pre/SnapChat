import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import imagePath from '../../component/Constants/imagePath.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import BtnComp from '../../component/BtnComp.js';
import navigationStrings from '../../component/Constants/navigationStrings.js';
import styles from './Styles.js';
import color from '../styles/color';

import notifee, {AndroidImportance} from '@notifee/react-native';
import Loader from '../../component/Loader.js';
import {useDispatch} from 'react-redux';
import {setMainRoute} from '../../redux/action/authAction.js';
import {async_key, storeData} from '../../provider/UserPreference.js';

const InitialScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handlePress = () => {
    async function onDisplayNotification() {
      // Request permissions (required for iOS)
      if (Platform.OS === 'ios') {
        await notifee.requestPermission();
      }

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default5',
        name: 'Default Channel5',
        sound: 'android_app_src_main_res_raw_noti',
        importance: AndroidImportance.HIGH,
      });

      // Display a notification
      await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
          // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
      });

      await notifee.displayNotification({
        title:
          '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
        subtitle: '&#129395;',
        body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
        android: {
          channelId,
          color: '#4caf50',
          actions: [
            {
              title: '<b>Dance</b> &#128111;',
              pressAction: {id: 'dance'},
            },
            {
              title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
              pressAction: {id: 'cry'},
            },
          ],
        },
      });
    }
  };

  const handleSignUp = screen => {
    dispatch(setMainRoute({mainRoute: navigationStrings.routes.login}));
    // navigation.reset({
    //   index: 7,
    //   routes: [{name: navigationStrings.HomeScreen}],
    // });
    storeData(async_key.token, '94329984092348');
  };

  // setLoading(false);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>
      <Loader loading={loading} />
      <View style={{}}>
        <Image
          source={imagePath.logo}
          style={{...styles.logoStyle, marginTop: hp(4)}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <BtnComp
          title="Login"
          btnStyle={{
            backgroundColor: color.green,
            marginHorizontal: wp(10),
            borderRadius: wp(2),
            marginBottom: hp(2),
          }}
          onPress={() => navigation.navigate(navigationStrings.LoginScreen)}
        />
        <BtnComp
          title="SignUp"
          btnStyle={{
            backgroundColor: 'red',
            marginHorizontal: wp(10),
            borderRadius: wp(2),
            marginBottom: hp(2),
          }}
          onPress={() => {
            dispatch(setMainRoute({mainRoute: navigationStrings.routes.login}));
            storeData(async_key.token, '94329984092348');
          }}
          logotest={{color: '#fff'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
