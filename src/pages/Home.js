
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Home</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.btnText}>Ir para a página de registro</Text>
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
