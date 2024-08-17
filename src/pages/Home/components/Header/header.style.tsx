import {colors, metrics} from '../../../../themes';

import {StyleSheet} from 'react-native';

const _layout = {
  indicatorWidth: 12,
  indicatorHeight: 50,
  itemWidth: metrics.screenWidth * 0.6,
  itemHeight: metrics.screenWidth * 0.6 * 1.2,
  spacing: 20,
  borderRadius: 16,
  indicatorHeightPercentage: 0.75,
  headingBig: 54,
  headingSmall: 28,
};

export default StyleSheet.create({
  container: {
    height: metrics.screenHeight * (1 - _layout.indicatorHeightPercentage),
    position: 'absolute',
    top: metrics.scaleY(50),
    left: '3%',
    right: '10%',
    zIndex: 1,
    padding: _layout.spacing,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  hackerAnimation: {
    width: metrics.scale(300),
    height: metrics.scale(300),
    right: metrics.scale(70),
  },
  skeletonCover: {
    width: metrics.scale(25),
    height: metrics.scale(25),
    backgroundColor: '#C6D3E3',
    left: metrics.scale(57),
    bottom: metrics.scale(108),
    borderRadius: metrics.scale(10),
  },
  laptopText: {
    ...metrics.fonts.verySmall,
    left: metrics.scale(57),
    bottom: metrics.scale(108),
    position: 'absolute',
    textAlign: 'center',
  },
  animatedTitle: {
    fontSize: _layout.headingBig,
    color: colors.black,
    marginBottom: _layout.spacing,
    paddingLeft: metrics.scale(40),
    fontFamily: 'Sansita-Regular',
    // top: 0,
    // left: -metrics.scale(360),
    // top: metrics.scale(100),
    // left: -135,
    // top: 50,
  },
  desc: {...metrics.fonts.regular},
});
