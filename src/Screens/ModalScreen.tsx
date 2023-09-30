import React, {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';
import {HeaderTittle} from '../Components/HeaderTittle';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <HeaderTittle tittle="Modal Component" />
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        /*  onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}*/
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              elevation: 10,
              shadowOpacity: 0.25, //IOS
              justifyContent: 'center',
              alignItems: 'center',
              height: 130,
              width: 250,
              borderRadius: 5,
            }}>
            <Text style={{color: 'black'}}>"Estamos dentro del modal"</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
