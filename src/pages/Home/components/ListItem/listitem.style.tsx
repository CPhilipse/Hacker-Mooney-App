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
    width: _layout.itemWidth,
    height: _layout.itemHeight,
    marginBottom: '30%',
    padding: _layout.spacing,
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: _layout.spacing,
    position: 'absolute',
    zIndex: 99,
    right: '10%',
  },
  textWrapper: {
    flex: 1,
    borderRadius: _layout.borderRadius,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.accent,
    // backgroundColor: colors.palePurple,
    padding: _layout.spacing / 2,
    paddingVertical: '15%',
  },
  text: {
    color: '#000',
    marginHorizontal: _layout.spacing,
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'left',
    bottom: '25%',
  },
});
