import {colors, metrics} from '../../themes';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    top: 0,
    width: '100%',
    height: metrics.scaleY(150),
    backgroundColor: colors.midBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  urlWrapper: {
    width: '95%',
    borderRadius: metrics.scale(15),
    height: metrics.scale(95),
    backgroundColor: colors.subTitleGrey,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  url: {
    ...metrics.fonts.whiteRegular,
    left: -metrics.scale(20),
  },
  lockIcon: {
    marginLeft: metrics.scale(20),
  },
  input: {
    // height: 40,
    marginHorizontal: metrics.scale(20),
    // marginBottom: metrics.scale(50),
    // borderWidth: 1,
    // paddingHorizontal: metrics.horizontal.pagePadding,
    color: colors.white,
    // borderRadius: 20,
  },
});
