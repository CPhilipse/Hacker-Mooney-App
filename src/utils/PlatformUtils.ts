import {Platform, Dimensions, StatusBar} from 'react-native';

const majorVersionIOS = parseInt(<string>Platform.Version, 10);
export const scrollViewContentInsets =
  majorVersionIOS < 11
    ? {
        bottom: 0,
        left: 0,
        right: 0,
        top: -20,
      }
    : {top: 0, left: 0, bottom: 0, right: 0};

const {width, height} = Dimensions.get('window');

export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const usesIOSFloatingModal = isiOS && majorVersionIOS >= 13;

/**
 * Used to check if the dimension are the same as iphone X.
 */
const iPhoneXMeasurements = {
  iPhoneX: {
    height: 812,
    width: 375,
  },
  iPhoneXSMax: {
    height: 896,
    width: 414,
  },
};

const iPhoneXMeasurementCheck = () => {
  const matchingMeasurement = Object.values(iPhoneXMeasurements).find(
    measurement => measurement.width === width && measurement.height === height,
  );
  return matchingMeasurement !== undefined;
};

export const getStatusBarHeight = () => {
  if (isiOS) {
    return isiPhoneX ? 44 : 20;
  }
  return StatusBar.currentHeight || 0;
};

export const isiPhoneX = isiOS && iPhoneXMeasurementCheck();
