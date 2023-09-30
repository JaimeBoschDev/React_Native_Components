import React from 'react';
import {
  View,
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {useAnimated} from '../Hooks/useAnimated';
import {useState} from 'react';
import {} from 'react-native';

interface Props {
  uri: String;
  styles?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, styles}: Props) => {
  const {opacity, FadeIn} = useAnimated();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    FadeIn();
    setIsLoading(false);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 400,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.3)',
          }}>
          <ActivityIndicator size={30} color="#5858D5" />
        </View>
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={() => finishLoading()}
        style={{...(styles as any), opacity}}
      />
    </View>
  );
};
