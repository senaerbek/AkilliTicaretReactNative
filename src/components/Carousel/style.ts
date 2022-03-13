import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    height: 220,
  },
  images: {
    height: 200,
    resizeMode: 'cover',
  },
  sliderContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderDot: {
    margin: 3,
  },
  sliderDotColor: {
    color: 'gray',
  },
  sliderDotActiveColor: {
    color: '#FF5B02',
  },
});
