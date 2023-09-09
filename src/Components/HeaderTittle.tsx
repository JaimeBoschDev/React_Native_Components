import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  tittle: String;
}

export const HeaderTittle = ({tittle}: Props) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.title}>{tittle}</Text>
    </View>
  );
};
