import React, {memo, useEffect, useMemo, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {MainScreen} from '../screens/MainScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {BasketScreen} from '../screens/BasketScreen';
import {OffersScreen} from '../screens/OffersScreen';
import {AccountScreen} from '../screens/AccountScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CategoryService} from '../api/services/category.service';
import {Styles} from './style';
import {DetailScreen} from '../screens/CategoryDetails';
import {DrawerContent} from '../components/DrawerContent';
import {CategoryResponseModel} from '../api/models/category.model';

export type RootStackParamList = {
  Dashboard: undefined;
  DetailScreen: {id: any};
};

const MainStack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Dashboard') {
            return (
              <Image
                style={[Styles.bottomTabIcon, {tintColor: color}]}
                source={require('./images/home.png')}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Image
                style={[Styles.bottomTabIcon, {tintColor: color}]}
                source={require('./images/search.png')}
              />
            );
          } else if (route.name === 'Basket') {
            return (
              <Image
                style={[Styles.bottomTabIcon, {tintColor: color}]}
                source={require('./images/shopping-basket.png')}
              />
            );
          } else if (route.name === 'Offers') {
            return (
              <Image
                style={[Styles.bottomTabIcon, {tintColor: color}]}
                source={require('./images/price-tag.png')}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <Image
                style={[Styles.bottomTabIcon, {tintColor: color}]}
                source={require('./images/user.png')}
              />
            );
          }
          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#C0C0C0',
        inactiveTintColor: '#ffffff',
        tabStyle: {
          backgroundColor: '#FF5B02',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={MainScreen}
        options={{tabBarLabel: 'Anasayfa'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarLabel: 'Arama'}}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{tabBarLabel: 'Sepetim'}}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{tabBarLabel: 'Kampanyalar'}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{tabBarLabel: 'Hesabım'}}
      />
    </Tab.Navigator>
  );
}

export const BottomAndDrawerNavigator = memo(function BottomNavigator() {
  const [list, setList] = useState<CategoryResponseModel[]>([]);

  useEffect(() => {
    CategoryService.getCategoryList().then(response => {
      setList(response);
    });
  }, []);

  const header = useMemo(() => {
    return (
      <TouchableOpacity>
        <Image
          style={Styles.header}
          source={require('./images/notification.png')}
        />
      </TouchableOpacity>
    );
  }, []);

  const options: any = {
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    },
    headerTintColor: 'black',
    headerTitleStyle: {textAlign: 'center'},
    headerRight: () => header,
  };

  if (list.length === 0) {
    return null;
  }

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: 'red',
        itemStyle: {
          marginVertical: 0,
        },
      }}
      drawerStyle={Styles.drawerStyle}
      drawerContent={props => <DrawerContent props={props} list={list} />}
      screenOptions={{headerShown: true}}>
      <Drawer.Screen
        name={'Anasayfa'}
        component={TabComponent}
        options={options}
      />
      {list?.map(item => (
        <Drawer.Screen
          key={item.id}
          name={item.categoryName}
          component={TabComponent}
          options={options}
        />
      ))}
    </Drawer.Navigator>
  );
});

export const MainNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={Styles.navigatorContainer}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen
          name="Dashboard"
          component={BottomAndDrawerNavigator}
        />
        <MainStack.Screen name="DetailScreen" component={DetailScreen} />
      </MainStack.Navigator>
    </SafeAreaView>
  );
});
