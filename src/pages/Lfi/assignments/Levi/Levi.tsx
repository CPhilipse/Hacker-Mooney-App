import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import DummyData from '../../../../enum/DummyData';
import LottieView from 'lottie-react-native';
import React from 'react';
import Url from '../../../../components/Url';
import animations from '../../../../themes/animations';
import styles from './levi.style';

interface Props {
  navigation: any;
}

const url = 'https://levi.com/blog?image=candy.jpg';
const Levi = ({navigation}: Props) => {
  const [urlInput, onChangeUrl] = React.useState(url);
  const [showPasswd, onChangePasswd] = React.useState(false);
  const [showLeviHome, onChangeLeviHome] = React.useState(false);
  const [showHackerAnimation, onChangeAnimation] = React.useState(false);
  const [showLeviPassword, onChangeLeviPassword] = React.useState(false);
  const [showDecryptedPassword, onChangeDecryptedPassword] =
    React.useState(false);
  const [showLoginForm, onChangeLoginForm] = React.useState(false);
  const [usernameInput, onChangeUsername] = React.useState('');
  const [passwordInput, onChangePassword] = React.useState('');
  const [loggedIn, onChangeLoggedIn] = React.useState(false);

  const handleLogin = () => {
    if (usernameInput === 'levi' && passwordInput === 'L3v1_BrU1n$mA') {
      onChangeLoggedIn(true);
    } else {
      onChangeLoggedIn(false);
    }
  };

  const handleSearch = () => {
    if (urlInput.includes('../') && urlInput.includes('/etc/passwd')) {
      onChangePasswd(true);
    } else {
      onChangePasswd(false);
    }

    if (urlInput.includes('../') && urlInput.includes('/home/levi')) {
      onChangeLeviHome(true);
    } else {
      onChangeLeviHome(false);
    }

    if (
      urlInput.includes('../') &&
      urlInput.includes('/home/levi/hacker.mp4')
    ) {
      onChangeAnimation(true);
      onChangeLeviHome(false);
    } else {
      onChangeAnimation(false);
    }

    if (
      urlInput.includes('../') &&
      urlInput.includes('/home/levi/wachtwoord.txt')
    ) {
      onChangeLeviPassword(true);
      onChangeLeviHome(false);
    } else {
      onChangeLeviPassword(false);
    }

    if (urlInput.includes('../') && urlInput.includes('/home/levi/hint.txt')) {
      onChangeDecryptedPassword(true);
      onChangeLeviHome(false);
    } else {
      onChangeDecryptedPassword(false);
    }
  };

  const goToLogin = () => {
    onChangeLoginForm(true);
  };

  const handleLogout = () => {
    return onChangeLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <Url
          url={url}
          textInput
          onChangeUrl={onChangeUrl}
          urlInput={urlInput}
        />
        {showHackerAnimation ? (
          <>
            <LottieView
              style={styles.candyAnimation}
              source={animations.hacker}
              autoPlay
              loop
            />
            <View style={styles.skeletonCover} />
          </>
        ) : (
          <LottieView
            style={styles.candyAnimation}
            source={animations.dancing_candy}
            autoPlay
            loop
          />
        )}

        {loggedIn && (
          <>
            <Text style={styles.title}>Welkom {usernameInput}</Text>
            <Pressable style={styles.loginCta} onPress={handleLogout}>
              <Text style={styles.inloggenText}>Uitloggen</Text>
            </Pressable>
          </>
        )}

        {showLoginForm && !loggedIn ? (
          <>
            <Text style={styles.title}>Inloggen</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              value={usernameInput}
              placeholder="Gebruikersnaam"
              placeholderTextColor={'#000'}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={passwordInput}
              placeholder="*******"
              placeholderTextColor={'#000'}
            />
            <Pressable style={styles.loginCta} onPress={handleLogin}>
              <Text style={styles.inloggenText}>Inloggen</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.title}>Blog van Levi</Text>
            <Pressable style={styles.loginCta} onPress={handleSearch}>
              <Text style={styles.inloggenText}>Zoeken</Text>
            </Pressable>
            <Pressable style={styles.loginCta}>
              <Text style={styles.inloggenText}>Mountainbiken</Text>
            </Pressable>
            <Pressable style={styles.loginCta}>
              <Text style={styles.inloggenText}>Freerunnen</Text>
            </Pressable>
            <Pressable style={styles.loginCta} onPress={goToLogin}>
              <Text style={styles.inloggenText}>Inloggen</Text>
            </Pressable>
          </>
        )}

        {showPasswd && (
          <>
            <Text style={styles.output}>root:x:0:0:root:/root:/bin/bash</Text>
            <Text style={styles.output}>bin:x:1:1:bin:/bin:/sbin/nologin</Text>
            <Text style={styles.output}>
              daemon:x:2:2:daemon:/sbin:/sbin/nologin
            </Text>
            <Text style={styles.output}>
              levi:x:0:0:root:/home/levi:/bin/bash
            </Text>
          </>
        )}
        {showLeviHome && (
          <>
            <Text style={styles.output}>videos</Text>
            <Text style={styles.output}>afbeeldingen</Text>
            <Text style={styles.output}>hacker.mp4</Text>
            <Text style={styles.output}>wachtwoord.txt</Text>
            <Text style={styles.output}>hint.txt</Text>
          </>
        )}

        {showLeviPassword && (
          <Text style={styles.output}>
            Je versleutelde wachtwoord is: (!€₩€#$
          </Text>
        )}

        {showDecryptedPassword && (
          <Text style={styles.output}>
            Het wachtwoord is Clemens, als je goed kijkt naar het versleutelde
            wachtwoord kan je er 'Clemens' in lezen
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Levi;
