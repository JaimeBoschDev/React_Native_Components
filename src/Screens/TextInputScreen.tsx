import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {HeaderTittle} from '../Components/HeaderTittle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
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

      <TextInput
        style={stylesScrren.TextInput}
        placeholder="Ingrese su nombre"
        onChangeText={value => onChange(value, 'phone')}
        keyboardType="phone-pad"
        autoCapitalize="none"
        placeholderTextColor="gray"
        autoCorrect={false}
      />

      <HeaderTittle tittle={JSON.stringify(form, null, 3)} />
    </View>
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
