import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageGardener from '../assets/images/gardener.js'
import ImageFactory from '../assets/images/factory.js'

const HomeCard = ({
  title,
  cardColor,
  svgName,
  onPress
}) => {
  return (
    <TouchableOpacity style={{...styles.card, backgroundColor: cardColor}} onPress={onPress}>
        { svgName === 'gardener' ? <ImageGardener style={{...styles.image}} /> : <ImageFactory  style={{...styles.image}} /> }
        <View style={{...styles.cardBottom}}>
        <Text style={{...styles.text}}>{title}</Text>
        <View style={{ ...styles.arrowButton }} >
            <Ionicons name="arrow-forward" size={32} color="white" />
        </View>
        </View>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 45,
        height: '100%',
        width: '90%',
        justifyContent: 'space-evenly',
        // position: 'relative'
      },
    
      image: {
        marginTop: -90,
        marginHorizontal: '20%',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 10
      },
    
      cardBottom: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      text: {
        fontFamily: 'Syne',
        fontSize: 30,
        color: 'white'
      },
    
      arrowButton: {
        borderColor: 'white',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 15,
      }
});
