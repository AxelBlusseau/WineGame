import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import HomeCard from '../components/HomeCard';
import Carousel from 'react-native-reanimated-carousel';

import globalStyles from '../styles/global';

const carouselItems = [
  {
    title: "Jouer",
    screenName: "ThemesScreen" ,
    svgName: "gardener",
    cardColor: '#52CA93'
  },
  {
    title: "Règles",
    screenName: "RulesScreen" ,
    svgName: "piano",
    cardColor: '#DF83F9'
  },
]

export default function HomeScreen({navigation}) {
  const [items, setItems] = useState(carouselItems);
  const [activeIndex, setIndex] = useState(0);

  function renderItem({item,index}){
    return (
      <HomeCard title={item.title} onPress={() => navigation.navigate(item.screenName)} svgName={item.svgName} cardColor={item.cardColor} />
    )
  }

  return (
    <View style={{...styles.container}}>
      <CustomHeader title="Sur la route des vins de France" />
      <View style={{...styles.content}}>
        <View style={{height: '55%'}}>
          <Carousel
                    loop={false}
                    width={370}
                    data={items}
                    style={{width: '100%', overflow: 'visible'}}
                    scrollAnimationDuration={1000}
                    renderItem={renderItem}
                />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,

  content: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
