import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, SPACING } from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/app_images/profile.png')}
        style={styles.Image}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Image: {
        height: SPACING.space_36,
        width: SPACING.space_36,
    },
});

export default ProfilePic;
