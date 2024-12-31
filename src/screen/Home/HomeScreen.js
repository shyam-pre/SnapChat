import React, {useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  BackHandler,
  StyleSheet,
  SafeAreaView,
  Share,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {setMainRoute} from '../../redux/action/authAction';
import navigationStrings from '../../component/Constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          ('dfasfjsda;jf;lsdfkj;lsdajf;lsdf');
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleLogOut = () => {
    dispatch(setMainRoute({mainRoute: navigationStrings.routes.logout}));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={onShare}>
          <Text>HomeScreen</Text>
        </TouchableOpacity>

        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <Image
          source={require('../../assets/Icon/home.png')}
          style={{height: 20, width: 40}}
        />
        <TouchableOpacity onPress={handleLogOut} style={{borderWidth: 1}}>
          <Text style={{marginTop: 40}}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  back: {
    backgroundColor: '#000',
  },
});
