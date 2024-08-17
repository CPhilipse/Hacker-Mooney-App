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
  title: {
    ...metrics.fonts.title,
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingVertical: metrics.vertical.spacing.s,
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
  loginCta: {
    marginHorizontal: metrics.horizontal.pagePadding,
    width: 150,
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
  wrapper: {
    marginHorizontal: metrics.horizontal.pagePadding,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  table_head: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 7,
    backgroundColor: '#3bcd6b',
  },
  table_head_captions: {
    fontSize: 15,
    color: 'white',
  },

  table_body_single_row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 7,
  },
  table_data: {
    fontSize: 11,
    color: '#000',
  },
  table: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#fff',
  },
});
