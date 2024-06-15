import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomHeader = ({
  title,
  textStyle,
}) => {
  return (
      <Text
        style={{...styles.title, ...textStyle }}>
        {title}
      </Text>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 700,
    fontFamily: 'Syne'
  },
});
