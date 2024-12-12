import AsyncStorage from '@react-native-async-storage/async-storage';

export const async_key = {
  status: 'status',
};

export const storeData = async (key, params) => {
  try {
    const info = JSON.stringify(params);
    await AsyncStorage.setItem(key, info);
  } catch (err) {
    console.log(err);
  }
};

export const getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    const info = JSON.parse(data);
    return info;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const clerData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
