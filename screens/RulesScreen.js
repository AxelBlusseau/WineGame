 
import { StyleSheet, View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import globalStyles from '../styles/global';

export default function RulesScreen() {
  return (
    <View style={{ ...styles.container }}>
      <CustomHeader title="Règles" />
      <View style={{ ...styles.content }}>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Installer le plateau</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Choisir son pion</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Lancer le dé</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Avancer son pion</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Cliquer sur la thématique</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Choisir son niveau</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Répondre et vérifier la réponse</Text></View>
        <View style={{ ...styles.card }}><Text style={{ ...styles.text }}>Si la réponse est la bonne, je reste à ma place, dans le cas contraire je recule d'où je viens</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    justifyContent: "space-evenly"
  },
  card: {
    backgroundColor: "#F9F6F6",
    height: 73,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  text: {
    fontSize: 14, 
    fontFamily: "Jost"
  }

});
