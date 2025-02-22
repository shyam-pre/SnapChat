// import React, {useState, useContext, createContext} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// import Maps from '../../map/Maps';
// import Chat from '../../chat/Chat';

// // Step 1: Create a Context
// export const ThemeContext = createContext();

// export const UseContext = ({children}) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const [user, setUser] = useState(null);
//   const [theme, setTheme] = useState('light');

//   const updateUser = newUser => setUser(newUser);
//   const toggleTheme = () =>
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

//   return (
//     // Step 2: Provide the Context value
//     <ThemeContext.Provider
//       value={{
//         user,
//         theme,
//         updateUser,
//         toggleTheme,
//       }}>
//       {/* <View
//         style={[
//           styles.container,
//           {backgroundColor: isDarkMode ? '#000' : '#fff'},
//         ]}>
//         <Text style={styles.title}>Theme Context Example</Text>
//         <ThemeToggle />
//         <ThemedText />
//       </View> */}
//       {children}
//       {/* <Maps />
//       <Chat /> */}
//     </ThemeContext.Provider>
//   );
// };

// Step 3: Consume the Context value in a child component
// const ThemeToggle = () => {
//   // const { toggleTheme } = useContext(ThemeContext);
//   const {toggleTheme} = useContext(ThemeContext);
//   return <Button title="Toggle Theme" onPress={toggleTheme} />;
// };

// const ThemedText = () => {
//   const {isDarkMode} = useContext(ThemeContext);
//   return (
//     <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
//       Current Theme: {isDarkMode ? 'Dark' : 'Light'}
//     </Text>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightgray',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   text: {
//     fontSize: 18,
//     marginTop: 16,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext, useState} from 'react';

export const CameraContext = createContext();

export const AppContext = ({children}) => {
  const [cameraData, setCameraData] = useState([]);
  return (
    <CameraContext.Provider value={{cameraData, setCameraData}}>
      {children}
    </CameraContext.Provider>
  );
};

const styles = StyleSheet.create({});
