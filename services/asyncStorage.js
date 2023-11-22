import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key,value) => {
    return new Promise( async (resolve, reject) => {
    try {
    const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      resolve(true)
    } catch (e) {
      console.log(e)
    }
})};

  const getData = async (key) => {
    return new Promise( async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return resolve(JSON.parse(value))
      }
    } catch (e) {
        console.log(e)
    }
})};

  const clearAll = async () => {
    try {
      const value = await AsyncStorage.clear();
    } catch (e) {
        console.log(e)
    }
  };

  export default {
    storeData,
    getData,
    clearAll
  }