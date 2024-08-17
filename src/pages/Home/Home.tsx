// Inspiration: https://dribbble.com/shots/15107351-Grenouille-animation

import * as React from 'react';

import Animated, {
  Easing,
  FadeInRight,
  FadeOut,
  Layout,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
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
import {MotiText, MotiView} from 'moti';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {colors, images, metrics} from '../../themes';

import Header from './components/Header';
import ListItem from './components/ListItem';
import Lists from './components/Lists';
import Pages from '../../enum/Pages';
import Tabs from './components/Tabs';
import {faker} from '@faker-js/faker';

interface Props {
  navigation: any;
}

interface TabsProps {
  tabs: any;
  onTabSelect: any;
  activeTab: any;
  style?: any;
}

// Grabbed from https://www.flaticon.com/stickers-pack/karaoke-5
const _icons = [images.sqli, images.hacker_cracked];

faker.seed(2);

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

// const _tabs = ['Reconnaissance', 'Web', 'Privilege Escalation'];
const _tabs = ['Ken je target', 'Web aanvallen', 'Rechten verhogen'];
const _data = {
  'Ken je target': [
    {key: '0', name: 'Introductie', image: images.detective, page: '-'},
    {key: '1', name: 'Netwerk Scannen', image: images.network, page: '-'},
    {key: '2', name: 'Website Scannen', image: images.website, page: '-'},
    {key: '3', name: 'DNS Enumeratie', image: images.dns, page: '-'},
    {key: '4', name: 'SNMP Enumeratie', image: images.snmp, page: '-'},
    {key: '5', name: 'FTP Enumeratie', image: images.ftp, page: '-'},
    {key: '6', name: 'SMB Enumeratie', image: images.smb, page: '-'},
  ],
  'Web aanvallen': [
    {key: '0', name: 'Introductie', image: images.hacker_cracked, page: '-'},
    {key: '1', name: 'SQL Injection', image: images.sqli, page: Pages.SQLI},
    {
      key: '2',
      name: 'Local File Inclusion (LFI)',
      image: images.path,
      page: Pages.LFI,
    },
    {
      key: '3',
      name: 'Cross Site Scripting (XSS)',
      image: images.xss,
      page: Pages.XSS,
    },
    {
      key: '4',
      name: 'Server Side Template Injection (SSTI)',
      image: images.ssti,
      page: Pages.SSTI,
    },
    {
      key: '5',
      name: 'External Entity Attack (XXE)',
      image: images.xxe,
      page: Pages.XXE,
    },
    {
      key: '6',
      name: 'Remote File Inclusion (RFI)',
      image: images.rfi,
      page: Pages.RFI,
    },
  ],
  'Rechten verhogen': [
    {key: '0', name: 'Introductie', image: images.privesc, page: '-'},
  ],
};

const Home = ({navigation}: Props) => {
  const [activeTab, setActiveTab] = React.useState(_tabs[0]);
  const scrollY = useSharedValue(0);
  const text = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(ev => {
    scrollY.value = ev.contentOffset.y;
  });

  React.useEffect(() => {
    scrollY.value = withTiming(0, {duration: 400});
  }, [activeTab]);

  // TODO: decide if you wanna keep the Jesus saves animation on the laptop.
  // React.useEffect(() => {
  //   text.value = withRepeat(withTiming(1, {duration: 100}), -1, true);
  // }, []);

  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <View style={styles.container}>
        <Header scrollY={scrollY} text={text} navigation={navigation} />
        <View style={{flexDirection: 'row', flex: 1}}>
          <Tabs
            tabs={_tabs}
            onTabSelect={(tab: string) => {
              setActiveTab(tab);
            }}
            activeTab={activeTab}
          />
          <Lists
            activeTab={activeTab}
            data={_data[activeTab]}
            onScroll={onScroll}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
