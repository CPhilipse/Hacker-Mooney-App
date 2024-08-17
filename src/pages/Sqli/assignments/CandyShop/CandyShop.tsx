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
import styles from './candyshop.style';

interface Props {
  navigation: any;
}

const CandyShop = ({navigation}: Props) => {
  const [usernameInput, onChangeUsername] = React.useState('');
  const [passwordInput, onChangePassword] = React.useState('');
  const [successfulSqli, onChangeSuccessfulSqli] = React.useState(100);
  const [loggedIn, onChangeLoggedIn] = React.useState(false);

  const handleLogin = () => {
    DummyData.USER_TABLE_ROWS.map(({username, password}) => {
      console.log(
        usernameInput,
        username,
        username === usernameInput,
        password === passwordInput,
        loggedIn,
      );
      if (username === usernameInput && password === passwordInput) {
        console.log('LOGGEDIN!!!', loggedIn);
        return onChangeLoggedIn(true);
      } else {
        console.log('NOT LOGGEDIN!!!', loggedIn);
        return onChangeLoggedIn(false);
      }
    });
  };

  const handleLogout = () => {
    return onChangeLoggedIn(false);
  };

  const handleSqli = () => {
    if (usernameInput.includes('OR 1=1') && passwordInput.includes('OR 1=1')) {
      onChangeSuccessfulSqli(200);
    } else {
      onChangeSuccessfulSqli(404);
    }

    return handleLogin();
  };

  return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <Url
          url="https://candyshop.com"
          textInput={false}
          onChangeUrl={undefined}
          urlInput="undefined"
        />
        <LottieView
          style={styles.candyAnimation}
          source={animations.dancing_candy}
          autoPlay
          loop
        />
        {loggedIn ? (
          <>
            <Text style={styles.title}>Welkom {usernameInput}</Text>
            <Pressable style={styles.loginCta} onPress={handleLogout}>
              <Text style={styles.inloggenText}>Uitloggen</Text>
            </Pressable>
          </>
        ) : (
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
            <Pressable style={styles.loginCta} onPress={handleSqli}>
              <Text style={styles.inloggenText}>Inloggen</Text>
            </Pressable>
          </>
        )}

        {/* TODO: make this table its own universal component */}
        {successfulSqli == 200 && (
          <View style={styles.wrapper}>
            {/* Table Container */}
            <View style={styles.table}>
              {/* Table Head */}
              <View style={styles.table_head}>
                <View style={{width: '15%'}}>
                  <Text style={styles.table_head_captions}>id</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.table_head_captions}>username</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.table_head_captions}>password</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.table_head_captions}>phone</Text>
                </View>
              </View>

              {DummyData.USER_TABLE_ROWS.map(
                ({id, username, password, phone}: any) => (
                  <View key={id} style={styles.table_body_single_row}>
                    <View style={{width: '15%'}}>
                      <Text style={styles.table_data}>{id}</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <Text style={styles.table_data}>{username}</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <Text style={styles.table_data}>{password}</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <Text style={styles.table_data}>{phone}</Text>
                    </View>
                  </View>
                ),
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CandyShop;
