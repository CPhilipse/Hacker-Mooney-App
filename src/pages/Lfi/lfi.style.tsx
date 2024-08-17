import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...metrics.fonts.title,
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingVertical: metrics.vertical.spacing.s,
  },
  subTitle: {
    ...metrics.fonts.subtitle,
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingTop: metrics.vertical.spacing.m,
    // textAlign: 'center',
  },
  desc: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    // paddingTop: metrics.vertical.spacing.s,
    ...metrics.fonts.regular,
  },
  queryHolder: {
    backgroundColor: colors.palePurple,
    opacity: 0.8,
    paddingVertical: metrics.scale(20),
    paddingLeft: metrics.horizontal.pagePadding,
    marginRight: metrics.horizontal.pagePadding,
    marginVertical: metrics.scale(20),
  },
  query: {
    ...metrics.fonts.regular,
  },
});
