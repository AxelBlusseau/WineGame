 
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import globalStyles from '../styles/global';

function goToLevelsScreen(navigation, themeId) {
    navigation.navigate('LevelsScreen', { theme: themeId })
}

export default function ThemesScreen({navigation}) {
  return (
    <View style={{...styles.container}}>
      <CustomHeader title="Thématiques" />
      <View style={{...styles.content}}>
        <CustomButton title="Histoire" buttonColor="#5F7456" onPress={() => goToLevelsScreen(navigation, 1)} />
        <CustomButton title="Géographie" buttonColor="#4B556B" onPress={() => goToLevelsScreen(navigation, 2)} />
        <CustomButton title="Accords / crus / dégustation" buttonColor="#644F62" onPress={() => goToLevelsScreen(navigation, 3)} />
        <CustomButton title="Métiers / vinification" buttonColor="#58363D" onPress={() => goToLevelsScreen(navigation, 4)} />
        <CustomButton title="Domaines" buttonColor="#828168" onPress={() => goToLevelsScreen(navigation, 5)} />
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
