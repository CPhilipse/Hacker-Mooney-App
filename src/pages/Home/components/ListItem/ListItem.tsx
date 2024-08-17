import Animated, {Easing, FadeInRight, FadeOut} from 'react-native-reanimated';
import {Image, ImageProps, Pressable, Text, View} from 'react-native';

import React from 'react';
import styles from './listitem.style';

interface Props {
  item: {id: number; name: string; image: ImageProps['source']; page: string};
  index: number;
  navigation: any;
}

const ListItem = ({item, index, navigation}: Props) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(item.page === '-' ? 'Home' : item.page)
      }>
      <Animated.View
        entering={FadeInRight.duration(index > 3 ? 0 : 400)
          .delay(index > 3 ? 0 : 100 + 300 * index)
          .easing(Easing.linear)}
        exiting={FadeOut}
        style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textWrapper}></View>
        <Text style={styles.text}>{item.name}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default ListItem;
