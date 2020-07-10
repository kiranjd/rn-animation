import React, { ReactNode } from 'react';
import { View, ActivityIndicator } from 'react-native';

interface Props {
  children: ReactNode;
}

const SIDE: number = 70;
const RADIUS: number = SIDE / 2;
const SCALE_DOWN: number = 0.8;

/**
 * 1. Use PI to get only part of the circle
 * 2. Rotate the part from 1. Speed optionally should be controllable
 * 3. Increase or decrease the circumference of the segment from 2
 */

const Circle = ({ children }: Props) => (
  <View
    style={{
      width: SIDE,
      height: SIDE,
      borderRadius: RADIUS,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </View>
);

const InnerCircle = () => (
  <View
    style={{
      width: SIDE * SCALE_DOWN,
      height: SIDE * SCALE_DOWN,
      borderRadius: RADIUS * SCALE_DOWN,
      backgroundColor: '#fff'
    }}
  />
);

export default () => {
  return (
    <View>
      <Circle>
        <InnerCircle />
      </Circle>
      {/* <ActivityIndicator size={60} style={{ alignSelf: 'baseline' }} /> */}
    </View>
  );
};
