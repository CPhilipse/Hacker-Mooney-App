import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    paddingLeft: metrics.horizontal.pagePadding,
    paddingTop: metrics.vertical.spacing.s,
  },
  title: {
    ...metrics.fonts.title,
    lineHeight: 50,
  },
});
