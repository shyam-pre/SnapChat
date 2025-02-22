// import {View, Text, Image, ScrollView} from 'react-native';
// import React, {Suspense, useState} from 'react';
// import Loader from '../../component/Loader';
// const lazyComp = React.lazy(() => import('../Home/HomeScreen'));
// const Chat = () => {
//   const [loading, setLoading] = useState(false);
//   return (
//     <ScrollView>
//       <Loader loading={loading} />
//       <Text>Chat</Text>

//       <Image source={require('../../assets/Icon/home.png')} />
//       <Suspense fallback={<Text>dffsadfsdf</Text>}>
//         <lazyComp />
//       </Suspense>
//     </ScrollView>
//   );
// };

// export default Chat;

import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';
import React, {
  lazy,
  Suspense,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import Loader from '../../component/Loader';
import HomeHeader from '../../component/HomeHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import SwiperComponent from './SwiperComponent';
import images from '../../component/Constants/imagePath';
import {useHomeDataQuery} from '../../redux/AllApi/AllApi';

// Lazy load the HomeScreen component
const LazyComp = React.lazy(() => import('../Home/HomeScreen'));

const Chat = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [imgData, setImgData] = useState([]);
  // const {data, error, isLoading} = useHomeDataQuery();
  // console.log('dataaaaaaaaaaaa', data);
  // console.log('errrrrrrrrrr', error);
  // console.log('islodinggggggggg', isLoading);

  // Memoized imagesData
  const imagesData = useMemo(
    () => [
      {id: 1, img: images.img_banner1},
      {id: 2, img: images.img_banner2},
      {id: 3, img: images.img_banner3},
      {id: 4, img: images.img_banner4},
    ],
    [],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Show the Loader while loading */}
      <Loader loading={loading} />
      {/* <Text onPress={() => navigation.openDrawer()}>Chat</Text>
      <Text>Chat</Text> */}
      {/* <Suspense
        fallback={
          <View style={{marginTop: hp(20)}}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        }>
        <LazyComp />
      </Suspense> */}
      <SwiperComponent imagesData={imagesData || []} />
      <Text
        onPress={() => setCount(pre => pre + 1)}
        style={{padding: 10, borderWidth: 1}}>
        llllllllll
      </Text>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};

export default Chat;
const styles = StyleSheet.create({
  slide1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
