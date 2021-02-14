import { React } from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Theme: {
    police: Platform.OS === 'android' ? 'Roboto' : 'Arial',
  },
});

const Theme= () => {
  return <Text style={styles.text}>Your platform is: {Platform.OS}</Text>;
};