 
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import globalStyles from '../styles/global';

function goToQuestionScreen(navigation, themeId, levelId){
  navigation.navigate('QuestionScreen', { theme: themeId, level: levelId })
}

export default function LevelsScreen({navigation, route}) {
  return (
    <View style={{...styles.container}}>
      <CustomHeader title="Niveaux" />
      <View style={{...styles.content}}>
        <CustomButton title="Débutant" buttonColor="#9266F3" onPress={() => goToQuestionScreen(navigation, route.params.theme, 1)} />
        <CustomButton title="Amateur" buttonColor="#0682EF" onPress={() => goToQuestionScreen(navigation, route.params.theme, 2)} />
        <CustomButton title="Expert" buttonColor="#F6BD28" onPress={() => goToQuestionScreen(navigation, route.params.theme, 3)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
