import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../Interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.page as never)}
      activeOpacity={0.6}>
      <View style={styles.container}>
        <Icon
          style={styles.iconItem}
          name={menuItem.icon}
          size={19}
          color="#5856D6"
        />
        <Text style={styles.textItem}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon
          style={{
            ...styles.iconItem,
          }}
          name="chevron-forward-outline"
          size={19}
          color="#5856D6"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  textItem: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  iconItem: {
    marginTop: 6,
  },
});
