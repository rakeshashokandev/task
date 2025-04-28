import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../Global/Color';
import Fonts from '../Global/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../Redux/StoreSlice';

const {width, height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [product, setProduct] = useState(
    require('../Json/ProductData.json').data,
  );
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const getCartItem = item =>
    cartItems.find(cartItem => cartItem.id === item.id);

  const handleProduct = item => {
    navigation.navigate('ProductScreen', {item});
  };

  const exclusiveItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.producView}
          onPress={() => handleProduct(item)}
          >
          <View style={{flex: 1.2,}}>
            <Image
              source={require('../Assets/Images/appleProduct.png')}
              style={{width: '100%', height: height * 0.1, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: Fonts.Font_Bold, fontSize: width * 0.04}}>
              {item.name}
            </Text>
            <Text style={{fontFamily: Fonts.Font_Regular}}>
              {item.price_desc}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: Fonts.Font_Bold}}>
              {'\u20B9'}
              {item.price}
            </Text>

            {getCartItem(item) ? (
              <View
                style={{
                  width: width * 0.20,
                  height: height * 0.04,
                  backgroundColor: Color.Primary_color,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: width * 0.02,
                  paddingHorizontal: width * 0.02,
                }}>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromCart(item))}>
                  <Icon2 name={'minus'} size={20} color={Color.White} />
                </TouchableOpacity>
                <Text style={{color: Color.White}}>
                  {getCartItem(item)?.quantity}
                </Text>
                <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                  <Icon2 name={'plus'} size={20} color={Color.White} />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => dispatch(addToCart(item))}
                style={{
                  width: width * 0.20,
                  height: height * 0.04,
                  backgroundColor: Color.Primary_color,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: width * 0.02,
                }}>
                <Text
                  style={{
                    color: Color.White,
                    fontFamily: Fonts.Font_Bold,
                    fontSize: width * 0.035,
                  }}>
                  ADD
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headder}>
        <Image
          source={require('../Assets/Images/logo.png')}
          style={{width: width * 0.1, height: height * 0.05}}
        />
      </View>
      <View style={styles.searchWrapper}>
        <View style={styles.searchView}>
          <Icon
            name="search"
            size={25}
            color={Color.Black}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search Store"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../Assets/Images/banner.png')}
          style={{width: width * 0.9, height: height * 0.2, resizeMode: 'contain'}}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={styles.productHeader}>
          <Text style={{fontFamily: Fonts.Font_Regular, fontSize: width * 0.06}}>
            Products
          </Text>
        </View>
        <FlatList
          data={product}
          keyExtractor={item => item.id}
          renderItem={exclusiveItem}
          numColumns={2}
          contentContainerStyle={styles.flatListStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background_Color,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: width * 0.03,
  },
  searchWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.Search,
    borderRadius: width * 0.02,
    height: height * 0.05,
    width: width * 0.9,
    paddingVertical: width * 0.02,
  },
  icon: {
    marginRight: width * 0.02,
  },
  input: {
    flex: 1,
    fontSize: width * 0.040,
    color: '#000',
    fontFamily: Fonts.Font_Regular,
  },
  producView: {
    width: width * 0.40,
    height: height * 0.27,
    borderRadius: width * 0.03,
    borderColor: 'black',
    justifyContent: 'center',
    margin: width * 0.02,
    borderWidth: 0.2,
    padding: width * 0.02,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
  },
  flatListStyle: {
    alignItems: 'center',
    backgroundColor: Color.Background_Color,
  },
});
