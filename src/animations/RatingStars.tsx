import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Animated, FlatList } from 'react-native';
import { Star } from './Star';

const initialState = [
  {
    id: '1',
    selected: false,
  },
  {
    id: '2',
    selected: false,
  },
  {
    id: '3',
    selected: false,
  },
  {
    id: '4',
    selected: false,
  },
  {
    id: '5',
    selected: false,
  },
];

export default () => {
  const scale = useRef(new Animated.Value(0.7)).current;
  const [showStars, setShowStars] = useState(initialState);

  const animate = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      bounciness: 8,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  useEffect(() => animate(), [animate]);

  const starPressed = (indexTill: any) => {
    setShowStars((prevState) => {
      const selectedStars = prevState.map((item, index) => ({
        ...item,
        selected: index <= indexTill ? true : false,
      }));

      return selectedStars;
    });
  };

  const renderStars = (item: any, index: any) => {
    const starFilled = item.selected;
    return (
      <Star
        key={item.id}
        starFilled={starFilled}
        index={index}
        onPress={() => starPressed(index)}
      />
    );
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
        ...shadow,
      }}
    >
      {/* <FlatList
        data={showStars}
        renderItem={renderStars}
        horizontal
        scrollEnabled={false}
      /> */}
      {/* {showStars.map((item, index) => renderStars(item, index))} */}
      {
        showStars.map((x, index) => {
          <Star
            key={x.id}
            starFilled={x.selected}
            index={index}
            onPress={() => starPressed(index)}
          />
        })
      }
    </Animated.View>
  );
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};
