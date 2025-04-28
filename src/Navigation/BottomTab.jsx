import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import CartScreen from '../Screens/CartScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../Global/Color';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
const BottomTab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');
export default function BottomTabNavigator() {
  const cartItems = useSelector(state => state.cart.cartItems);
  // const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const itemCount = cartItems.length;
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.Primary_color,
        tabBarInactiveTintColor: color.Bottom_Icon,
        tabBarStyle: {backgroundColor: '#fff', height: height * 0.08},
        tabBarIconStyle: {fontSize: 28},
      }}>
      <BottomTab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="storefront-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon2 name="manage-search" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="cart-outline" size={size} color={color} />
          ),
          tabBarBadge: itemCount > 0 ? itemCount : null,
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon2 name="favorite-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
