// // import {View, Text, Image, ScrollView} from 'react-native';
// // import React, {Suspense, useState} from 'react';
// // import Loader from '../../component/Loader';
// // const lazyComp = React.lazy(() => import('../Home/HomeScreen'));
// // const Chat = () => {
// //   const [loading, setLoading] = useState(false);
// //   return (
// //     <ScrollView>
// //       <Loader loading={loading} />
// //       <Text>Chat</Text>

// //       <Image source={require('../../assets/Icon/home.png')} />
// //       <Suspense fallback={<Text>dffsadfsdf</Text>}>
// //         <lazyComp />
// //       </Suspense>
// //     </ScrollView>
// //   );
// // };

// // export default Chat;

// import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';
// import React, {lazy, Suspense, useState} from 'react';
// import Loader from '../../component/Loader';
// import HomeHeader from '../../component/HomeHeader';
// import { SafeAreaView } from 'react-native-safe-area-context';

// // Lazy load the HomeScreen component
// const LazyComp = React.lazy(() => import('../Home/HomeScreen'));

// const Chat = ({navigation}) => {
//   const [loading, setLoading] = useState(false);

//   return (
//     <SafeAreaView>
//       {/* Show the Loader while loading */}
//       <Loader loading={loading} />

//       {/* <Text onPress={() => navigation.openDrawer()}>Chat</Text>
//       <Text>Chat</Text> */}

//       {/* Use Suspense with a fallback component */}
//       {/* <Suspense fallback={<ActivityIndicator size="large" color="blue" />}>
//         <LazyComp />
//       </Suspense> */}

//       <HomeHeader onPress={{}} />
//     </SafeAreaView>
//   );
// };

// export default Chat;

import React from 'react';
import WrapperContainer from '../../component/WrapperContainer';
import {FlatList, Image, Text, View} from 'react-native';
import HomeHeader from '../../component/HomeHeader';
import {data} from '../chat/Data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import user1 from '../../assets/Icon/user1.png';
import imagePath from '../../component/Constants/imagePath';
const Chat = () => {
  const renderItem = ({item}) => {
    console.log('LKLLLL', item);

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: wp(4),
          marginTop: hp(2),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={user1} style={{height: hp(4), width: wp(8)}} />
          <Text style={{marginLeft: wp(4)}}>{item.name}</Text>
        </View>
        <Image
          source={imagePath.ic_comment}
          style={{height: hp(4), width: wp(4)}}
        />
      </View>
    );
  };
  return (
    <WrapperContainer backgroundColor={'#fff'}>
      <HomeHeader contentText="Chat" />
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.4}
      />
      <Text>Chat</Text>
    </WrapperContainer>
  );
};

export default Chat;
