import React, { useEffect, useCallback, useState } from 'react';
import { Animated } from 'react-native';
import Star from './Star';
import { useAnimatedValue } from './utils';

interface Star {
  id: number | string;
  selected: boolean;
}

const initialState: Array<Star> = [
  {
    id: '1',
    selected: false
  },
  {
    id: '2',
    selected: false
  },
  {
    id: '3',
    selected: false
  },
  {
    id: '4',
    selected: false
  },
  {
    id: '5',
    selected: false
  }
];

export default () => {
  const scale = useAnimatedValue(0.7);
  const [showStars, setShowStars] = useState(initialState);

  const animate = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      bounciness: 8,
      useNativeDriver: true
    }).start();
  }, [scale]);

  useEffect(() => animate(), [animate]);

  const starPressed = (indexTill: number) => {
    setShowStars((prevState) => {
      const selectedStars = prevState.map((item, index) => ({
        ...item,
        selected: index <= indexTill
      }));

      return selectedStars;
    });
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{ scale }],
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '50%',
        flexDirection: 'row',
        ...shadow
      }}
    >
      {showStars.map((ele, idx) => (
        <Star
          key={ele.id}
          starFilled={ele.selected}
          index={idx}
          onPress={() => starPressed(idx)}
        />
      ))}
    </Animated.View>
  );
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3
};
