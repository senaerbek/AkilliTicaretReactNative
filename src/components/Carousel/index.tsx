import React, {useCallback, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {Styles} from './style';

interface Props {
  imageList: string[];
}

export function Carousel(props: Props) {
  const {imageList} = props;
  const {width} = Dimensions.get('window');
  const widthCeil = Math.ceil(width);
  const [pageIndex, setPageIndex] = useState(0);

  const onScroll = useCallback(
    event => {
      const slide = Math.ceil(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width,
      );
      if (slide !== pageIndex) {
        setPageIndex(slide);
      }
    },
    [pageIndex],
  );

  return (
    <View style={Styles.container}>
      <ScrollView
        onScroll={onScroll}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{width: widthCeil}}>
        {imageList.map((item, index) => (
          <Image
            key={index}
            style={[
              {
                width: widthCeil,
              },
              Styles.images,
            ]}
            source={{
              uri: item,
            }}
          />
        ))}
      </ScrollView>
      <View style={Styles.sliderContainer}>
        {imageList.map((item, index) => (
          <Text
            key={index}
            style={[
              index === pageIndex
                ? Styles.sliderDotActiveColor
                : Styles.sliderDotColor,
              Styles.sliderDot,
            ]}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}
