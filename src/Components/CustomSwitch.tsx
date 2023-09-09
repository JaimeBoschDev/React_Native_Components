import React, {useState} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';

interface Props {
  labelText?: String;
  isOn: boolean;
  onChange: () => void;
}

export const CustomSwitch = ({isOn, labelText, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{labelText}</Text>
      <Switch
        trackColor={{false: '#D9D9DB', true: '#5856D6'}}
        thumbColor={Platform.OS === 'android' ? '5856D6' : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#5856D6',
    fontSize: 25,
    fontStyle: 'italic',
  },
});
