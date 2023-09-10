import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {HeaderTittle} from '../Components/HeaderTittle';
import {styles} from '../theme/appTheme';
import {CustomSwitch} from '../Components/CustomSwitch';
import {useForm} from '../Hooks/useForm';

export const TextInputScreen = () => {
  const {onChange, form, isSuscribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTittle tittle="Text Inputs" />
            <TextInput
              style={stylesScrren.TextInput}
              placeholder="Ingrese su nombre"
              onChangeText={value => onChange(value, 'name')}
              keyboardType="default"
              placeholderTextColor="gray"
              autoCapitalize="words"
              autoCorrect={false}
            />

            <TextInput
              style={stylesScrren.TextInput}
              placeholder="Ingrese su correo"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
            />

            <CustomSwitch
              isOn={isSuscribe}
              labelText="Suscribirse"
              onChange={value => onChange(value, 'isSuscribe')}
            />

            <HeaderTittle tittle={JSON.stringify(form, null, 3)} />
            <HeaderTittle tittle={JSON.stringify(form, null, 3)} />
            <HeaderTittle tittle={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesScrren.TextInput}
              placeholder="Ingrese su nombre"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              autoCapitalize="none"
              placeholderTextColor="gray"
              autoCorrect={false}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScrren = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: 'rgba(0,0,0,0.5)',
    color: 'black',
    borderRadius: 10,
    marginVertical: 10,
  },
});
