import { useRef } from 'react';
import { Animated } from 'react-native';

export const sequence = (anims) => Animated.sequence(anims).start;
export const parallel = (anims) => Animated.parallel(anims).start;
export const useAnimatedValue = (value: number) =>
  useRef(new Animated.Value(value)).current;
