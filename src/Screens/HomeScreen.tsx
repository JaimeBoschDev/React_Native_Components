import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../Components/FlatListMenuItem';
import {MenuItems} from '../data/MenuItems';
import {HeaderTittle} from '../Components/HeaderTittle';

export const HomeScreen = () => {
  const SeparetorItem = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.1, marginVertical: 8}} />
    );
  };

  return (
    <View style={styles.globalMargin}>
      <FlatList
        data={MenuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTittle tittle="Opciones de Menú" />}
        ItemSeparatorComponent={SeparetorItem()}
      />
    </View>
  );
};
