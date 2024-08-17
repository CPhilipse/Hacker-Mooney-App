import {Image, Text, TextInput, View} from 'react-native';
import {colors, images, metrics} from '../../themes';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from '../../enum/Icons';
import React from 'react';
import styles from './url.style';

interface Props {
  url: string;
  textInput: boolean;
  onChangeUrl: any;
  urlInput: string;
}

const Url = ({url, textInput, onChangeUrl, urlInput}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.urlWrapper}>
        {textInput ? (
          <TextInput
            style={styles.input}
            onChangeText={onChangeUrl}
            value={urlInput}
          />
        ) : (
          <Text style={styles.url}>{url}</Text>
        )}
        {/* <Image source={images.lock} style={styles.lockIcon} /> */}
        <Icon
          name={Icons.LOCK}
          size={metrics.icon.m}
          color={colors.white}
          style={styles.lockIcon}
        />
      </View>
    </View>
  );
};

export default Url;
