import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {CategoryResponseModel} from '../../api/models/category.model';
import {DrawerContentComponentProps} from '@react-navigation/drawer/src/types';

interface Props {
  props: DrawerContentComponentProps;
  list: CategoryResponseModel[];
}
export function DrawerContent(props: Props) {
  const {list} = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              props.props.navigation.toggleDrawer();
            }}>
            <View style={Styles.categoryIcon}>
              <Image
                style={Styles.drawerIcon}
                source={require('./images/arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <View style={Styles.drawerHeader}>
            <Text style={Styles.drawerText}>Kategoriler</Text>
          </View>

          {list?.map((item: CategoryResponseModel) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => {
                  props.props.navigation.navigate('DetailScreen', {
                    id: item.id,
                  });
                }}>
                <View style={Styles.drawerContent}>
                  <Text style={Styles.drawerText}>{item.categoryName}</Text>
                  <View>
                    <Image
                      style={Styles.drawerIcon}
                      source={require('./images/right-arrow.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Styles.divider} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={Styles.divider} />
      <View style={Styles.drawerBottomContainer}>
        <Text style={Styles.drawerText}>Iletisim Bilgileri</Text>
        <View style={Styles.drawerInfoContainer}>
          <Image
            style={Styles.drawerInfoIcons}
            source={require('./images/twitter.png')}
          />
          <Image
            style={[Styles.drawerInfoIcons, Styles.margin]}
            source={require('./images/instagram.png')}
          />
          <Image
            style={[Styles.drawerInfoIcons, Styles.margin]}
            source={require('./images/facebook.png')}
          />
        </View>
      </View>
      <View style={Styles.divider} />
      <View style={Styles.drawerBottomContainer}>
        <View style={Styles.drawerHelpContainer}>
          <Image
            style={Styles.drawerInfoIcons}
            source={require('./images/info.png')}
          />
          <Text style={[Styles.drawerText, Styles.margin]}>Yardim</Text>
        </View>

        <View style={Styles.drawerHelpContainer}>
          <Image
            style={Styles.drawerInfoIcons}
            source={require('./images/support.png')}
          />
          <View style={Styles.margin}>
            <Text style={Styles.drawerText}>444 96 44</Text>
            <Text style={Styles.drawerText}>Musteri Hizmetleri</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
