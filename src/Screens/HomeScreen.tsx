import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../Components/FlatListMenuItem';

const MenuItems = [
  {
    name: 'Animation ',
    icon: 'beer-outline',
    page: 'Page 1',
  },
  {
    name: 'Animation 2',
    icon: 'apps-outline',
    page: 'Page 2',
  },
];

export const HomeScreen = () => {
  const renderListHeader = () => {
    return (
      <View style={{marginBottom: 20}}>
        <Text style={styles.title}> Opciones de Menu </Text>
      </View>
    );
  };

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
        ListHeaderComponent={renderListHeader()}
        ItemSeparatorComponent={SeparetorItem()}
      />
    </View>
  );
};
