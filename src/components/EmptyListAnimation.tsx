import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View style={styles.ScreenContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  LottieStyle: {
    height: 300,
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize : FONTSIZE.size_18,
    color : COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});

export default EmptyListAnimation;
