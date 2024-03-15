import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

interface PriceProps {
  price: string;
  currency: string;
}

interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View style={styles.PaymentFooter}>
      <View style={styles.PriceContainer}>
        <Text style={styles.PriceTitle}>Price</Text>
        <Text style={styles.PriceText}>
          {' '}
          {price.currency}
          <Text style={styles.Price}>{price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={() => buttonPressHandler()}>
        <Text style={styles.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  PaymentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_20,
    padding: SPACING.space_20,
  },
  PriceContainer: {
    width: 100,
    alignItems: 'center',
  },
  PriceTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
    fontSize: FONTSIZE.size_14,
  },
  PriceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_24,
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
  payButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryOrangeHex,
    height: SPACING.space_36 * 2,
    borderRadius: SPACING.space_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
  },
});

export default PaymentFooter;
