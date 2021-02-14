import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';



const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

const styles = StyleSheet.create({});

export default TextInput