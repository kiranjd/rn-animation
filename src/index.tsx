import React from 'react';
import { View, Text } from 'react-native';
import { ButtonOnShow } from './animations';
import RatingStars from './animations/RatingStars';

export default () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    }}
  >
    {/* <ButtonOnShow /> */}
    <RatingStars />
    <Text>Whre are the stars?</Text>
  </View>
);
