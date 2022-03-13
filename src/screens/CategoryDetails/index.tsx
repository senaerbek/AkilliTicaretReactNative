import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {Styles} from './style';

type Props = {
  route?: RouteProp<{params: {id: string}}, 'params'>;
};

export function DetailScreen(props: Props) {
  const navigation = useNavigation();
  const {route} = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Kategori {route?.params.id}</Text>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Geri Dön</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
