
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Register</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('HomeScreen')}>
          <Text style={styles.btnText}>Ir para a página de home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  },
  textTitle: {
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#122C34',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#fff'
  }
});
