import React from 'react';
import {Alert, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTittle} from '../Components/HeaderTittle';
import {Button} from 'react-native';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.globalMargin}>
      <HeaderTittle tittle="Alerts" />
      <Button title="Mostrar alerta" onPress={createTwoButtonAlert} />
    </View>
  );
};
