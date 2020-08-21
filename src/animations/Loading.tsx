import React, { useEffect, useCallback } from 'react';
import {
  View,
  ViewStyle,
  Button,
  Animated,
  TransformsStyle,
  Easing,
  ActivityIndicator
} from 'react-native';
import { useAnimatedValue } from './utils';

interface Props {
  styles?: ViewStyle | ViewStyle[];
  transform?: TransformsStyle['transform'];
  color: string;
}

const RADIUS: number = 200;
const SIDE: number = RADIUS / 2;
const SCALE_DOWN: number = 0.8;

/**
 * Close ref: https://hashnode.com/post/learn-react-native-animation-by-building-circular-progress-bar-ck3pwh1ja00dd6vs1vntuuw2k
 * 1. Render half circle
 * 2. Rotate the part from 1. Speed optionally should be controllable
 * 3. Increase or decrease the circumference of the segment from 2
 */
const SemiCircle = ({ styles, transform, color }: Props) => (
  <Animated.View
    style={{
      overflow: 'hidden',
      width: SIDE,
      height: SIDE,
      borderRadius: RADIUS,
      ...styles,
      transform
    }}
  >
    <View style={{ width: SIDE / 2, overflow: 'hidden' }}>
      <View
        style={{
          width: SIDE,
          height: SIDE * 2,
          borderTopLeftRadius: RADIUS,
          borderTopRightRadius: RADIUS,
          backgroundColor: color
        }}
      />
    </View>
  </Animated.View>
);

const InnerCircle = ({ styles }: Props) => (
  <View
    style={{
      width: SIDE,
      height: SIDE,
      borderRadius: RADIUS,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <View
      style={{
        width: SIDE * SCALE_DOWN,
        height: SIDE * SCALE_DOWN,
        borderRadius: RADIUS,
        backgroundColor: '#fff',
        ...styles
      }}
    />
  </View>
);

export default () => {
  const value = useAnimatedValue(0);

  const animate = useCallback(() => {
    Animated.loop(
      Animated.timing(value, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }, [value]);

  const reanimate = () => {
    value.setValue(0);
    animate();
  };

  useEffect(() => animate(), [animate]);

  const spinForLeft = value.interpolate({
    inputRange: [0, 0.25, 0.5],
    outputRange: ['0deg', '180deg', '360deg']
  });

  const spinForRight = value.interpolate({
    inputRange: [0, 0.25, 0.5],
    outputRange: ['180deg', '0deg', '-180deg']
  });
  const spinBg = value.interpolate({
    inputRange: [0, 0.3, 0.6, 1],
    outputRange: ['90deg', '0deg', '-90deg', '0deg']
  });

  return (
    <>
      <View>
        <View>
          <SemiCircle
            styles={{ position: 'absolute' }}
            transform={[{ rotate: spinForLeft }]}
            color="black"
          />
          <SemiCircle
            styles={{ position: 'absolute' }}
            transform={[{ rotate: spinForRight }]}
            color="yellow"
          />
          {/* <SemiCircle
            styles={{ position: 'absolute' }}
            transform={[{ rotate: spinBg }]}
            color="green"
          /> */}
          <InnerCircle styles={{ position: 'absolute' }} />
        </View>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Button title="REANIMATE" onPress={reanimate} />
      </View>
    </>
  );
};
