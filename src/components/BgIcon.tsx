import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BORDERRADIUS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BgIconProps{
    name : string,
    color : string,
    size : number,
    bgColor : string,
}

const BgIcon:React.FC<BgIconProps> = ({name,color,size,bgColor}) => {
  return (
    <View style={[styles.IconBg ,{ backgroundColor : bgColor }]}>
      <CustomIcon
        name={name}
        color={color}
        size={size}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    IconBg: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BgIcon;
