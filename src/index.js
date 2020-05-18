import React from 'react';
import { View } from 'react-native';
import { ButtonOnShow } from './animations';
import RatingStars from './animations/RatingStars';

export default () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    }}
  >
    <ButtonOnShow />
    <RatingStars />
  </View>
);
