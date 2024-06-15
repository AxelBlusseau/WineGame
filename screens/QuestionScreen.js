import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card'
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomHeader from '../components/CustomHeader';
import ImageBubbles from '../assets/images/bubbles.js'
import globalStyles from '../styles/global';
import datas from '../questions.json';

export default function QuestionScreen({route}) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    let filteredQuestions = datas.questions.filter(q => q.themeId === route.params.theme && q.levelId === route.params.level)
    const item = filteredQuestions[(Math.floor(Math.random() * filteredQuestions.length))]

    setTitle(item?.title || "")
    setQuestion(item?.question || "")
    setAnswer(item?.answer || "")
  }, []);

  return (
    <View style={{ ...styles.container }}>
      <CustomHeader title="Question" />

      <FlipCard flipVertical={false} flipHorizontal={true}>

        <View style={{ ...styles.content }}>
            <View style={{ ...styles.card }}>
              <Text style={{ ...styles.title }}>{ title }</Text>
              <Text style={{ ...styles.text }}>{ question }</Text>
              <View style={{ ...styles.arrowButton }} >
                <Ionicons name="arrow-forward" size={32} color="white" />
              </View>
            </View>
        </View>

        <View style={{ ...styles.content }}>
            <View style={{ ...styles.card }}>
              <Text style={{ ...styles.title }}>Réponse</Text>
              <Text style={{ ...styles.text }}>{ answer }</Text>
              <View style={{ ...styles.arrowButton }} >
                <Ionicons name="arrow-back" size={32} color="white" />
              </View>
            </View>
        </View>

      </FlipCard>

      <ImageBubbles style={{ position: 'absolute', right: 0, bottom: 0, zIndex: -1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },

  card: {
    padding: 30,
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Jost-Bold',
    fontSize: 30,
  },
  text: {
    color: 'white',
    fontWeight: 700,
    fontFamily: 'Jost',
    fontSize: 20,
    textAlign: 'center'
  },

  arrowButton: {
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15
  }


});
