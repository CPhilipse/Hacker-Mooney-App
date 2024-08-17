import {colors, metrics} from '../../themes';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: metrics.horizontal.pagePadding,
  },
  titleWrapper: {
    alignItems: 'center',
    paddingBottom: metrics.scaleY(50),
  },
  headerTitle: {
    ...metrics.fonts.title,
  },
  headerBody: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  hackerAnimation: {
    width: metrics.scale(500),
    height: metrics.scale(500),
  },
  skeletonCover: {
    width: metrics.scale(52),
    height: metrics.scale(52),
    backgroundColor: '#C6D3E3',
    left: metrics.scale(205),
    bottom: metrics.scale(189),
    borderRadius: metrics.scale(10),
  },
  iconTextWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: metrics.vertical.spacing.xs,
  },
  iconText: {
    ...metrics.fonts.regular,
    paddingLeft: metrics.scale(20),
  },
  rowWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  icon: {
    width: metrics.icon.m,
    height: metrics.icon.m,
  },
});
