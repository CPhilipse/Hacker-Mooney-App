import {Image, Text, View} from 'react-native';

import LottieView from 'lottie-react-native';
import React from 'react';
import animations from '../../themes/animations';
import {images} from '../../themes';
import styles from './mooney.style';

interface Props {
  navigation: any;
}

// TODO: add a link that upon press of the cross you're redirected to a Christian website, same for Israel
const data = [
  {key: 0, name: 'location', icon: images.location, text: 'Nederland'},
  {key: 1, name: 'april', icon: images.april, text: 'Verjaardag'},
  {key: 2, name: 'cross', icon: images.cross, text: 'Volgeling van Jezus'},
  {key: 3, name: 'israel', icon: images.israel, text: 'Pro-Israël'},
];

// Inspiratie UI: https://dribbble.com/shots/2134801-User-Profile
const Mooney = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <Text style={styles.headerTitle}>Hacker Mooney</Text>
        </View>
        <View style={styles.headerBody}>
          <View>
            <LottieView
              style={styles.hackerAnimation}
              source={animations.hacker}
              autoPlay
              loop
            />
            <View style={styles.skeletonCover} />
          </View>

          <View style={styles.rowWrapper}>
            {data.map(({key, icon, text}) => {
              return (
                <View key={key}>
                  <View style={styles.iconTextWrapper}>
                    <Image source={icon} style={styles.icon} />
                    <Text style={styles.iconText}>{text}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Mooney;
