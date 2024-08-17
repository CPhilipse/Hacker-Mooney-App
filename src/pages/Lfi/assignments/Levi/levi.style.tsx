import {colors, metrics} from '../../../../themes';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  candyAnimation: {
    width: metrics.screenWidth - metrics.horizontal.pagePadding * 2,
    height: metrics.scale(800),
    marginHorizontal: metrics.horizontal.pagePadding,
  },
  skeletonCover: {
    width: metrics.scale(75),
    height: metrics.scale(75),
    backgroundColor: '#C6D3E3',
    right: metrics.scale(30),
    bottom: metrics.scale(295),
    alignSelf: 'center',
    borderRadius: metrics.scale(10),
  },
  title: {
    ...metrics.fonts.title,
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingVertical: metrics.vertical.spacing.s,
  },
  loginCta: {
    marginHorizontal: metrics.horizontal.pagePadding,
    width: 250,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightRed,
    marginBottom: metrics.scale(50),
  },
  inloggenText: {
    ...metrics.fonts.regular,
  },
  output: {
    ...metrics.fonts.regular,
  },
  input: {
    height: 40,
    marginHorizontal: metrics.horizontal.pagePadding,
    marginBottom: metrics.scale(50),
    borderWidth: 1,
    paddingHorizontal: metrics.horizontal.pagePadding,
    color: colors.black,
    borderRadius: 20,
  },
});
