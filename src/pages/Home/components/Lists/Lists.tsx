import Animated, {FadeInRight, FadeOut, Layout} from 'react-native-reanimated';
import {FlatList, View} from 'react-native';

import ListItem from '../ListItem';
import React from 'react';
import {metrics} from '../../../../themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  activeTab: any;
  data: any;
  onScroll: any;
  navigation: any;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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

const Lists = ({activeTab, data, onScroll, navigation}: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <AnimatedFlatList
      key={activeTab}
      layout={Layout}
      onScroll={onScroll}
      entering={FadeInRight.delay(100)}
      exiting={FadeOut.duration(400)}
      data={data}
      scrollIndicatorInsets={{right: -1}}
      scrollEventThrottle={16}
      animatedProps={Layout}
      renderItem={({item}, index) => (
        <ListItem item={item} index={index} navigation={navigation} />
      )}
      style={{flexGrow: 0}}
      contentContainerStyle={{
        paddingTop:
          top + metrics.screenHeight * (1 - _layout.indicatorHeightPercentage),
        paddingBottom: bottom,
        paddingHorizontal: _layout.spacing,
      }}
    />
  );
};

export default Lists;
