import React, {useCallback, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {UserService} from '../../api/services/user.service';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './style';
import {LoadingIndicator} from '../../components/Loading';

export function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onLoginPress = useCallback(() => {
    setIsLoading(true);
    UserService.login({username: username, password: password})
      .then(r => {
        console.log(r.token);
        return AsyncStorage.setItem('token', r.token);
      })
      .then(() => {
        navigation.navigate('Main');
      })
      .catch(() => {
        Alert.alert('Hata', 'Kullanıcı adı yada şifre yanlış ', [{text: 'OK'}]);
      })
      .finally(() => setIsLoading(false));
  }, [username, password, navigation]);

  return (
    <LoadingIndicator isLoading={isLoading}>
      <View style={Styles.container}>
        <View style={Styles.body}>
          <TextInput
            style={Styles.input}
            autoCapitalize="none"
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#97A0AC"
            autoFocus={true}
            onChangeText={setUserName}
          />
          <TextInput
            style={Styles.input}
            autoCapitalize="none"
            placeholder="Şifre"
            secureTextEntry={true}
            placeholderTextColor="#97A0AC"
            onChangeText={setPassword}
          />
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity onPress={onLoginPress}>
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>Giriş</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LoadingIndicator>
  );
}
