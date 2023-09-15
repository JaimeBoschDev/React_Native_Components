import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../Components/FlatListMenuItem';
import {MenuItems} from '../data/MenuItems';
import {HeaderTittle} from '../Components/HeaderTittle';
import {ItemSeparator} from '../Components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <FlatList
        data={MenuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTittle tittle="Opciones de Menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
