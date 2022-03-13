import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {Styles} from './style';

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
}

export function LoadingIndicator(props: Props) {
  const {children, isLoading} = props;
  return (
    <>
      {children}
      {isLoading ? (
        <View style={Styles.activityIndicator} key="indicator">
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      ) : null}
    </>
  );
}
