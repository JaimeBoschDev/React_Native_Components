import React, {useState} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {HeaderTittle} from '../Components/HeaderTittle';
import {ActivityIndicator} from 'react-native';
import {FadeInImage} from '../Components/FadeInImage';

export const ScrollInfiniteScreen = () => {
  const [numbers, setnumbers] = useState([0, 1, 2, 3, 4, 5]);

  const Scrolling = () => {
    const newArray: number[] = [];
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index;
    }

    setTimeout(() => {
      setnumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const ItemComponent = (item: Number) => {
    return (
      <FadeInImage
        styles={{width: '100%', height: 400}}
        uri={`https://picsum.photos/id/${item}/1024/1024`}
      />
    );

    /*   <Image
      source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      style={{
        width: '100%',
        height: 400,
      }}
    />;*/
  };

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => ItemComponent(item)}
        ListHeaderComponent={() => <HeaderTittle tittle="Lista Numeros" />}
        onEndReached={Scrolling}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};
