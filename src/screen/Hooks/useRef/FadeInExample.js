// import React, {useRef, useEffect} from 'react';
// import {View, Animated, Button, StyleSheet, Image} from 'react-native';
// import {ic_bannerHome} from '../../../component/Constants/imagePath';
// const FadeInExample = () => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   };

//   useEffect(() => {
//     fadeIn(); // Fade in on mount
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* <Animated.View style={[styles.box, {opacity: fadeAnim}]} /> */}

//       <Button title="Fade In Again" onPress={fadeIn} />
//       <Animated.Image
//         source={require('../../../assets/Image/bannerHome.jpg')}
//         style={{height: 300, width: 300, opacity: fadeAnim}}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//     marginBottom: 20,
//   },
// });

// export default FadeInExample;

// import React, {useRef} from 'react';
// import {View, Button, Text, StyleSheet} from 'react-native';

// const FadeInExample = () => {
//   const viewRef = useRef(null);

//   const measureView = () => {
//     viewRef.current?.measure((x, y, width, height, pageX, pageY) => {
//       console.log(`Dimensions: ${width}x${height}`);
//       console.log(`Position on page: ${pageX}, ${pageY}`);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View ref={viewRef} style={styles.box} />
//       <Button title="Measure View" onPress={measureView} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'green',
//     marginBottom: 20,
//   },
// });

// export default FadeInExample;

import React, {useState, useEffect, useRef} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const FadeInExample = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    console.log('LLLLLLLLLLLLLLLlllllllllpppppppppp');
    prevCount.current = count; // Update ref after each render
  });

  return (
    <View style={styles.container}>
      <Text>Current Count: {count}</Text>
      {/* <Text>Previous Count: {prevCount.current}</Text> */}

      <Button title="Increment" onPress={() => setCount(prev => prev + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FadeInExample;
