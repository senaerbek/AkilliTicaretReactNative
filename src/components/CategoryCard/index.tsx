import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {CategoryResponseModel} from '../../api/models/category.model';

interface Props {
  item: CategoryResponseModel;
  onItemPress: (id: number) => void;
}

export function CategoryCard(props: Props) {
  const {item, onItemPress} = props;

  return (
    <TouchableOpacity onPress={() => onItemPress(item.id)}>
      <View style={Styles.categoryItemContainer}>
        <Image
          resizeMode="contain"
          style={Styles.categoryImage}
          source={
            item.imagePath.imagePath
              ? {
                  uri:
                    'https://test.akilliticaretim.com' +
                    item.imagePath.imagePath,
                }
              : require('./images/Image_not_available.png')
          }
        />
        <Text style={Styles.categoryText}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
}
