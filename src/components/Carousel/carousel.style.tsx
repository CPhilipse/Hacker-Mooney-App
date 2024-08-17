import {colors, metrics} from '../../themes';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: metrics.getStatusBarHeight(),
    // backgroundColor: '#ecf0f1',
    // backgroundColor: '#000',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    ...metrics.fonts.regular,
  },
});
