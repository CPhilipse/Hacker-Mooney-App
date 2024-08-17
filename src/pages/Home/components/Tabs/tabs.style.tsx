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
    flex: 1,
    justifyContent: 'flex-end',
    width: '20%',
    backgroundColor: colors.primary,
  },
  wrapper: {
    flex: _layout.indicatorHeightPercentage,
    justifyContent: 'space-between',
    position: 'relative',
  },
  isReady: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: _layout.indicatorWidth,
  },
  moti: {
    height: _layout.indicatorHeight,
    width: _layout.indicatorWidth,
    backgroundColor: '#000',
    borderRadius: _layout.indicatorWidth / 2,
    left: -_layout.indicatorWidth / 2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-90deg'}],
    flex: 1,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
