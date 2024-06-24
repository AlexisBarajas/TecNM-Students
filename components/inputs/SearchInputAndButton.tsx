
import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function SearchInputAndButton() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Search value:', searchValue);
  };

  return (
    <View
      style={styles.container}
    >
      <TextInput
        placeholder="Search..."
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
      />
      <TouchableWithoutFeedback
        onPress={handleSearch}
      >
        <Ionicons
          name="search"
          size={25}
          color={Colors.light.icon}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 0,
  },
  input: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    backgroundColor: Colors.light.input_background,
    borderRadius: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'transparent',
    fontSize: 22,
  },
  icon: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.light.button_background,
    padding: 21,
    textAlign: 'center',
    color: Colors.light.icon,
  },
});