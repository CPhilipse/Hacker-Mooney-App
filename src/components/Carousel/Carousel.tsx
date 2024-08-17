// Inspiration: https://dribbble.com/shots/14749133-Plant-care-mobile-interaction-with-illustrations

import * as React from 'react';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images, metrics} from '../../themes';

import Pages from '../../enum/Pages';
import styles from './carousel.style';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const {width, height} = Dimensions.get('window');
const _itemWidth = width * 0.6;
const _itemHeight = _itemWidth * 1.67;
const _spacing = 10;
const _itemWidthWithSpacing = _itemWidth + _spacing * 2;

function Item({item, index, scrollX, activeIndex, navigation}) {
  const currentIndex = useDerivedValue(() => {
    return scrollX.value / _itemWidthWithSpacing;
  });

  const inputRange = React.useMemo(() => [index - 1, index, index + 1]);

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        currentIndex.value,
        inputRange,
        [0.5, 1, 0.5],
        Extrapolate.CLAMP,
      ),
      transform: [
        {
          scale: interpolate(
            currentIndex.value,
            inputRange,
            [0.2, 1, 0],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY:
            activeIndex.value === currentIndex.value
              ? withRepeat(
                  withTiming(-_spacing, {duration: 2000}),
                  Infinity,
                  true,
                )
              : withSpring(
                  interpolate(
                    currentIndex.value,
                    inputRange,
                    [_spacing * 4, -_spacing * 2, _spacing * 4],
                    Extrapolate.CLAMP,
                  ),
                ),
        },
      ],
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            interpolate(
              currentIndex.value,
              inputRange,
              [
                (_itemHeight - 180) * 0.8,
                (_itemHeight - 180) * 0.5,
                (_itemHeight - 180) * 0.8,
              ],
              Extrapolate.CLAMP,
            ),
          ),
        },
      ],
    };
  });

  const wrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            currentIndex.value,
            inputRange,
            [(_itemHeight - 150) * 0.1, 0, (_itemHeight - 150) * 0.1],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: _itemWidth,
          margin: _spacing,
          height: _itemHeight - 150,
          overflow: 'hidden',
          borderRadius: 24,
        },
        wrapperStyle,
      ]}>
      <View
        style={{
          flex: 1,
          padding: _spacing,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              flex: 1,
              borderRadius: 24,
              backgroundColor: 'white',
            },
            containerStyle,
          ]}
        />
        <Pressable onPress={() => navigation.navigate(item.page)}>
          <View style={{alignItems: 'center'}}>
            <Animated.Image
              source={item.icon}
              style={[
                {
                  width: _itemWidth * 0.7,
                  height: _itemWidth * 0.7,
                  marginBottom: _spacing,
                },
                imageStyle,
              ]}
            />
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const Carousel = ({navigation, data}) => {
  const scrollX = useSharedValue(0);
  const activeIndex = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onMomentumBegin: ev => {
      activeIndex.value = -1;
    },
    onMomentumEnd: ev => {
      activeIndex.value = Math.floor(
        ev.contentOffset.x / _itemWidthWithSpacing,
      );
    },
    onScroll: ev => {
      scrollX.value = ev.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <AnimatedFlatList
        data={data}
        keyExtractor={item => item.key}
        // style={{flexGrow: 0}}
        horizontal
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={_itemWidthWithSpacing}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - _itemWidthWithSpacing) / 2,
        }}
        decelerationRate="fast"
        renderItem={({item, index}) => {
          return (
            <Item
              item={item}
              index={index}
              scrollX={scrollX}
              activeIndex={activeIndex}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default Carousel;
