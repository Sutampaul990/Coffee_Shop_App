import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../stores/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';

const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartitemQuantity = useStore(
    (state: any) => state.incrementCartitemQuantity,
  );
  const decrementCartitemQuantity = useStore(
    (state: any) => state.decrementCartitemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const TabBarHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push('Payment',{amount : CartPrice});
  };

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartitemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartitemQuantity(id, size);
    calculateCartPrice();
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: TabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length === 0 ? (
              <EmptyListAnimation title={'Cart is Empty'} />
            ) : (
              <View style={styles.ItemListContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      prices={data.prices}
                      roasted={data.roasted}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {CartList.length !== 0 ? (
            <PaymentFooter
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
              buttonPressHandler={buttonPressHandler}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ItemListContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default CartScreen;
