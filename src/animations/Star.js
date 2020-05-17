import React, { useRef, useCallback } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ starFilled, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const animatePressIn = useCallback(() => {
    Animated.timing(scale, {
      toValue: 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const animatePressOut = useCallback(() => {
    // scale-down it original size
    Animated.timing(scale, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const onPressIn = () => {
    onPress();
    animatePressIn();
  };

  const onPressOut = () => {
    animatePressOut();
  };

  return (
    <Animated.View
      style={{
        transform: [
          { scale },
          // {
          // rotate: scale.interpolate({
          //   inputRange: [0.5, 1],
          //   outputRange: ['180deg', '0deg'],
          // }),
          // rotate: '360deg',
          // },
        ],
      }}
    >
      <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
        <Icon
          name={starFilled ? 'star' : 'star-o'}
          size={60}
          color="#FFD700"
          style={{ margin: 5 }}
        />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
