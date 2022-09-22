import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

import {StyleSheet, View} from 'react-native';
import {PickerWrapper} from './styles';

export default function FilterPicker() {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <PickerWrapper>
      <Picker selectedValue={selectedValue} style={styles.picker}>
        <Picker.Item label="Data" value="" style={styles.pickerItem} />
        <Picker.Item label="Algum Valor" value="" style={styles.pickerItem} />
        <Picker.Item label="Algo" value="" style={styles.pickerItem} />
      </Picker>
    </PickerWrapper>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: 110,
  },
  pickerItem: {
    fontSize: 8,
  },
});
