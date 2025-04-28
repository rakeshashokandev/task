import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../Global/Color';
import Fonts from '../Global/Fonts';
import CommonFlatList from '../Components/CommonFlatList';
import Icon2 from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart, deleteItem, clearCart} from '../Redux/StoreSlice';
import CommonButton from '../Components/CommonButton';

// ✅ Get screen dimensions
const {width, height} = Dimensions.get('window');

export default function CartScreen({navigation}) {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const itemCount = cartItems.length;

  const handleAdd = item => dispatch(addToCart(item));
  const handleMinus = item => dispatch(removeFromCart(item));
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    navigation.navigate('OrderPlaced');
  };

  const cartItem = ({item}) => (
    <View style={styles.itemView}>
      <View style={{flex: 1}}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{'\u20B9'} {item.price}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => handleMinus(item)} style={styles.buttonStyle}>
            <Icon2 name={'minus'} size={width * 0.05} color={Color.Primary_color} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleAdd(item)} style={styles.buttonStyle}>
            <Icon2 name={'plus'} size={width * 0.05} color={Color.Primary_color} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.trashContainer}>
        <TouchableOpacity onPress={() => dispatch(deleteItem(item.id))}>
          <Icon name="trash-outline" size={width * 0.06} color={Color.Primary_color} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.replace('MainTap')}>
          <Icon name="chevron-back-circle" color={Color.Primary_color} size={width * 0.09} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View />
      </View>

      {itemCount > 0 ? (
        <>
          <View style={styles.itemContainer}>
            <CommonFlatList
              data={cartItems}
              keyExtractor={item => item.id}
              renderItem={cartItem}
            />
          </View>

          <View style={styles.totalContainer}>
            <View style={styles.totalLeft}>
              <Text style={styles.billTextStyle}>Items Total</Text>
              <Text style={styles.billTextStyle}>Tax</Text>
              <Text style={styles.billTextStyle}>Shipping Fees</Text>
              <Text style={styles.billTextStyle}>Total</Text>
            </View>
            <View style={styles.totalRight}>
              <Text style={styles.billTextStyle}>{'\u20B9'} {totalPrice.toFixed(2)}</Text>
              <Text style={styles.billTextStyle}>{'\u20B9'} 0</Text>
              <Text style={styles.billTextStyle}>{'\u20B9'} 0</Text>
              <Text style={styles.billTextStyle}>{'\u20B9'} {totalPrice.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <CommonButton
              style={styles.placeOrderButton}
              title={'Place Order'}
              textStyle={styles.buttonText}
              onPress={handlePlaceOrder}
            />
          </View>
        </>
      ) : (
        <View style={styles.emptyCartView}>
          <Image
            source={require('../Assets/Images/empty-cart.png')}
            resizeMode="center"
            style={{width: width * 0.6, height: height * 0.3}}
          />
          <Text style={styles.emptyCartText}>
            Your Cart is Empty, Add Some Products
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Color.Background_Color,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
  },
  headerTitle: {
    fontFamily: Fonts.Font_Bold,
    fontSize: width * 0.06,
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  totalContainer: {
    flexDirection: 'row',
    padding:width * 0.05,
  },
  totalLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  totalRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  billTextStyle: {
    fontFamily: Fonts.Font_Bold,
    fontSize: width * 0.038,
    padding: width * 0.005,
  },
  itemView: {
    flexDirection: 'row',
    backgroundColor: Color.White,
    marginVertical: height * 0.01,
    padding: width * 0.02,
    borderRadius: 10,
    elevation: 1,
  },
  itemName: {
    fontFamily: Fonts.Font_Regular,
    fontSize: width * 0.040,
    paddingVertical: height * 0.005,
  },
  itemPrice: {
    fontFamily: Fonts.Font_Bold,
    fontSize: width * 0.04,
    paddingVertical: height * 0.005,
  },
  qtyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.02,
  },
  buttonView: {
    width: width * 0.20,
    height: height * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.Primary_color,
    backgroundColor: Color.White,
  },
  buttonStyle: {
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
  },
  quantityText: {
    fontFamily: Fonts.Font_Bold,
    color: Color.Black,
  },
  trashContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    paddingVertical: height * 0.025,
  },
  placeOrderButton: {
    backgroundColor: Color.Primary_color,
    width: '90%',
    height: height * 0.05,
    borderRadius: 5,
  },
  buttonText: {
    color: Color.White,
    fontFamily: Fonts.Font_Bold,
    fontSize: width * 0.04,
  },
  emptyCartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontFamily: Fonts.Font_Bold,
    fontSize: width * 0.05,
    color: Color.Primary_color,
    marginTop: height * 0.02,
  },
});
