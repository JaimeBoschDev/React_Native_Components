import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimated = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const positionY = useRef(new Animated.Value(0)).current;

  const FadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  const MovingPositionY = (duration: number = 700, iniPosition: number) => {
    positionY.setValue(iniPosition);

    Animated.timing(positionY, {
      toValue: 0,
      useNativeDriver: true,
      duration,
    }).start();
  };

  const FadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  return {
    opacity,
    positionY,
    FadeIn,
    FadeOut,
    MovingPositionY,
  };
};
