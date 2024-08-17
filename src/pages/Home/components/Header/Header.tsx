import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Pressable, Text, View} from 'react-native';

import LottieView from 'lottie-react-native';
import Pages from '../../../../enum/Pages';
import React from 'react';
import animations from '../../../../themes/animations';
import {metrics} from '../../../../themes';
import styles from './header.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  scrollY: Animated.SharedValue<number>;
  text: Animated.SharedValue<number>;
  navigation: any;
}

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

const Header = ({scrollY, text, navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const threshold = React.useMemo(() => {
    return metrics.screenHeight * (1 - _layout.indicatorHeightPercentage);
  }, []);

  // const textAnimation = useAnimatedStyle(() => {
  //   return {
  //     transform: [{translateY: text.value}],
  //   };
  // });

  const headingStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        scrollY.value,
        [-1, 0, 1, threshold - 1, threshold, threshold + 1],
        [
          _layout.headingBig,
          _layout.headingBig,
          _layout.headingBig,
          _layout.headingSmall,
          _layout.headingSmall,
          _layout.headingSmall,
        ],
      ),
      top: interpolate(
        scrollY.value,
        [-1, 0, 1, threshold - 1, threshold, threshold + 1],
        [0, 0, 0, 40, 40, 40],
      ),
      left: interpolate(
        scrollY.value,
        [-1, 0, 1, threshold - 1, threshold, threshold + 1],
        [0, 0, 0, -138, -138, -138],
      ),
    };
  });
  const descriptionStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [-1, 0, 1, threshold / 2 - 1, threshold / 2, threshold / 2 + 1],
        [1, 1, 1, 0, 0, 0],
      ),
    };
  });
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.titleWrapper}>
        <Pressable onPress={() => navigation.navigate(Pages.MOONEY)}>
          <LottieView
            style={styles.hackerAnimation}
            source={animations.hacker}
            autoPlay
            loop
          />
          <View style={styles.skeletonCover} />
          {/* <Animated.Text style={[styles.laptopText, textAnimation]}>
            {`Jesus\nsaves!`}
          </Animated.Text> */}
        </Pressable>
        <Animated.Text style={[styles.animatedTitle, headingStyle]}>
          Mooney
        </Animated.Text>
      </View>
      <Animated.Text style={[styles.desc, descriptionStyle]}>
        Welkom bij de app van Hacker Mooney! De app waar je verschillende hack
        technieken kan leren en oefenen. Veel plezier met hacken!
      </Animated.Text>
    </View>
  );
};

export default Header;
