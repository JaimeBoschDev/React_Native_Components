import React, {useState} from 'react';
import {StyleSheet, View, Switch, Platform, Text} from 'react-native';
import {HeaderTittle} from '../Components/HeaderTittle';
import {CustomSwitch} from '../Components/CustomSwitch';

export const SwitchComponent = () => {
  const [state, setState] = useState({
    isActive: true,
    isHappy: true,
    isHungry: false,
  });

  const {isActive, isHappy, isHungry} = state;

  const onChange = (field: string, value: boolean) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTittle tittle="Switches" />
      <CustomSwitch
        isOn={isActive}
        labelText="Active: "
        onChange={() => onChange('isActive', !isActive)}
      />

      <CustomSwitch
        isOn={isHappy}
        labelText="Happy: "
        onChange={() => onChange('isHappy', !isHappy)}
      />

      <CustomSwitch
        isOn={isHungry}
        labelText="Hungry: "
        onChange={() => onChange('isHungry', !isHungry)}
      />

      <Text style={{color: 'black', fontSize: 18}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
