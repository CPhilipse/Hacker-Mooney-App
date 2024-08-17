import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

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
    backgroundColor: 'grey',
    opacity: 0.8,
    padding: metrics.scale(10),
    marginHorizontal: metrics.horizontal.pagePadding,
  },
  query: {},
});
