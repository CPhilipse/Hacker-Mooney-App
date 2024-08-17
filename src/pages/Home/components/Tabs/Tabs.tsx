import {Pressable, Text, View} from 'react-native';

import {MotiView} from 'moti';
import React from 'react';
import {metrics} from '../../../../themes';
import styles from './tabs.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface TabsProps {
  tabs: string[];
  onTabSelect: any;
  activeTab: any;
  style?: any;
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

const Tabs = ({tabs, onTabSelect, activeTab, style}: TabsProps) => {
  const _tabRefs = React.useRef({});
  const [isReady, setIsReady] = React.useState(false);
  const {top} = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, style]}>
        {isReady && (
          <View style={styles.isReady}>
            <MotiView
              style={styles.moti}
              animate={{
                // center it
                translateY:
                  _tabRefs.current[activeTab]?.y +
                  _tabRefs.current[activeTab]?.height / 2 -
                  _layout.indicatorHeight / 2,
              }}
              transition={{
                type: 'spring',
                mass: 1,
                stiffness: 300,
                damping: 600,
              }}
            />
          </View>
        )}
        {tabs.map(tab => {
          return (
            <Pressable
              key={tab}
              onPress={() => onTabSelect(tab)}
              style={styles.button}
              onLayout={ev => {
                _tabRefs.current = {
                  ..._tabRefs.current,
                  [tab]: {...ev.nativeEvent.layout},
                };

                if (
                  Object.keys(_tabRefs.current).length === tabs.length &&
                  !isReady
                ) {
                  setIsReady(true);
                }
              }}>
              <Text
                style={[
                  activeTab === tab ? {fontWeight: 700} : {fontWeight: 400},
                  {
                    fontWeight: activeTab === tab ? '900' : '500',
                    fontFamily: 'Sansita-Regular',
                  },
                  styles.textButton,
                ]}>
                {tab}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Tabs;
