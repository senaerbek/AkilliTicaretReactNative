import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Carousel} from '../../components/Carousel';
import {CategoryService} from '../../api/services/category.service';
import {BrandService} from '../../api/services/brand.service';
import {Styles} from './style';
import {LoadingIndicator} from '../../components/Loading';
import {CategoryCard} from '../../components/CategoryCard';
import {BrandResponseModel} from '../../api/models/brand.model';
import {CategoryResponseModel} from '../../api/models/category.model';
import {useNavigation} from '@react-navigation/native';

export function MainScreen() {
  const navigation = useNavigation();
  const [list, setList] = useState<CategoryResponseModel[]>([]);
  const [brandList, setBrandList] = useState<BrandResponseModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const imageList = useMemo(() => {
    return brandList.map(
      item => 'https://test.akilliticaretim.com/' + item.picture,
    );
  }, [brandList]);

  const navigateToDetailScreen = useCallback(
    id => {
      navigation.navigate('DetailScreen', {id});
    },
    [navigation],
  );

  useEffect(() => {
    setIsLoading(true);
    CategoryService.getCategoryList()
      .then(response => {
        setList(response);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    BrandService.getBrandList()
      .then(response => {
        setBrandList(response);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <LoadingIndicator isLoading={isLoading}>
      <View style={Styles.container}>
        <Carousel imageList={imageList} />
        <View style={Styles.categoryListContainer}>
          <FlatList
            data={list}
            numColumns={3}
            renderItem={({item}) => (
              <CategoryCard item={item} onItemPress={navigateToDetailScreen} />
            )}
            keyExtractor={item => '#' + item.id}
          />
        </View>
      </View>
    </LoadingIndicator>
  );
}
