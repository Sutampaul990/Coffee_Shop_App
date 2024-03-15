import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import OrderItemCard from './OrderItemCard';

interface OrderHistoryCardProps {
  navigationHandler: any;
  CartList: any;
  CartListPrice: string;
  orderDate: string;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  navigationHandler,
  CartList,
  CartListPrice,
  orderDate,
}) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
          <Text style={styles.HeaderTitle}>Order Time</Text>
          <Text style={styles.HeaderSubtitle}>{orderDate}</Text>
        </View>
        <View style={styles.PriceContainer}>
          <Text style={styles.HeaderTitle}>Total Amount</Text>
          <Text style={styles.HeaderPrice}>{'$ ' + CartListPrice}</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {CartList.map((data: any, index: any) => (
          <TouchableOpacity key={index.toString() + data.id} onPress={() => {
            navigationHandler({index:data.index,id:data.id,type:data.type})
          }}>
            <OrderItemCard
              type={data.type}
              name={data.name}
              id={data.id}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    flex: 1,
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});

export default OrderHistoryCard;
