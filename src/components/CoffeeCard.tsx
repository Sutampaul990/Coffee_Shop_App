import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import BgIcon from './BgIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;
interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  average_rating: string;
  name: string;
  price: any;
  buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  special_ingredient,
  price,
  average_rating,
  name,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImageBG}
        resizeMode={'cover'}>
        <View style={styles.cardRatingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_18}
          />
          <Text style={styles.imageText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>{special_ingredient}</Text>
      <View style={styles.cardFooterRow}>
        <Text style={styles.cardPriceCurrency}>
          $<Text style={styles.cardPrice}>{price.price}</Text>
        </Text>
        <TouchableOpacity
          onPress={() =>
            buttonPressHandler({
              id,
              index,
              name,
              roasted,
              imagelink_square,
              special_ingredient,
              type,
              prices: [{...price, quantity: 1}],
            })
          }>
          <BgIcon
            name={'add'}
            color={COLORS.primaryWhiteHex}
            bgColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
    margin: SPACING.space_10,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  cardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: SPACING.space_20,
    borderTopRightRadius: SPACING.space_20,
    top: 0,
    right: 0,
  },
  imageText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  subTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  cardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  cardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
});

export default CoffeeCard;
