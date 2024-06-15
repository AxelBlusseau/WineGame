import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({
  title,
  onPress,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...styles.buttonStyle,
        backgroundColor: buttonColor || '#512DA8',
      }}
      onPress={onPress}>
      <Text
        style={{...styles.title}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 72,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Syne',
    textAlign: "center"
  },
  buttonStyle: {
    borderRadius: 50
  }
  
});
