import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from './style';

export function EmptyScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.emptyText}>Empty</Text>
    </View>
  );
}
