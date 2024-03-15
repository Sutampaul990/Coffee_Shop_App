import {ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useStore } from '../stores/store';
import PaymentFooter from '../components/PaymentFooter';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import FavouritesItemCard from '../components/FavouritesItemCard';


const FavouritesScreen = ({navigation}:any) => {

  const FavoritesList = useStore((state:any) => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);

  const deleteFromFavouriteList = useStore(
    (state: any) => state.deleteFromFavouriteList,
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavouriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favorites" />
            {FavoritesList.length === 0 ? (
              <EmptyListAnimation title={'No Favourites'} />
            ) : (
              <View style={styles.ItemListContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                      <FavouritesItemCard
                        id = {data.id}
                        name = {data.name}
                        imagelink_portrait = {data.imagelink_portrait}
                        average_rating = {data.average_rating}
                        special_ingredient = {data.special_ingredient}
                        type = {data.type}
                        ingredients = {data.ingredients}
                        ratings_count = {data.ratings_count}
                        roasted = {data.roasted}
                        description = {data.description}
                        favourite = {data.favourite}
                        ToggleFavouriteItem = {ToggleFavourite}
                      />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
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

export default FavouritesScreen;
