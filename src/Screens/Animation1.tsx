import React from 'react';
import {Animated, Button, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {useAnimated} from '../Hooks/useAnimated';

export const Animation1 = () => {
  const {opacity, positionY, FadeIn, FadeOut, MovingPositionY} = useAnimated();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpuleBox,
          opacity: opacity,
          marginBottom: 20,
          transform: [{translateY: positionY}],
        }}
      />

      <Button
        title="FadeIn"
        onPress={() => {
          FadeIn();
          MovingPositionY(400, -200);
        }}
      />

      <View style={{marginVertical: 20}} />

      <Button title="FadeOut" onPress={FadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  purpuleBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5856D6',
  },
});
