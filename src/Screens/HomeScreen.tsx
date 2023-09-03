import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: String;
  icon: String;
  page: String;
}

const MenuItems = [
  {
    name: 'Animation ',
    icon: 'star-outline',
    page: 'Page 1',
  },
  {
    name: 'Animation 2',
    icon: 'star-outline',
    page: 'Page 2',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (MenuItem: MenuItem) => {
    return (
      <View>
        <Text style={{color: 'black'}}>
          {MenuItem.name} - {MenuItem.icon}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={MenuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
