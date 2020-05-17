import React, { useRef, useEffect, useCallback } from 'react';
import { Animated, Easing, Text, TouchableNativeFeedback } from 'react-native';

export default function CircularAnim() {
  const scale = useRef(new Animated.Value(0.3)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const borderRadius = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    animate();
  }, [animate]);

  const animate = useCallback(
    () =>
      Animated.sequence([
        Animated.delay(5000),
        Animated.spring(scale, {
          toValue: 1,
          bounciness: 8,
          useNativeDriver: true,
        }).start(),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(),
      ]),
    [opacity, scale],
  );

  return (
    <Animated.View
      style={{
        width: 300,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        transform: [{ scaleX: scale }],
        opacity,
        borderRadius,
      }}
    >
      <TouchableNativeFeedback onPress={animate}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
          Press me!
        </Text>
      </TouchableNativeFeedback>
    </Animated.View>
  );
}
