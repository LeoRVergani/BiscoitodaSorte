import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import LottieView  from 'lottie-react-native'

export default function Apresentacao({navigation}) {

  function navigateToLogin() {
    navigation.navigate("Login")
  }

  function navigateToSobre() {
    navigation.navigate("Sobre")
  }

  function navigateToTeste() {
    navigation.navigate("Biscoito")
  }

  return (
    <SafeAreaView style={styles.safe}>
        <LottieView 
          autoPlay
          style={{width: 200, height: 200}}
          source={require('../../assets/cookie.json')}
        />

      <Text style={styles.title}>Biscoito da sorte</Text>
      <Text style={styles.subtitle}>Porque nada tão sábio como um biscoito te dando conselhos de vida</Text>

      
      <TouchableOpacity style={styles.signInButton} activeOpacity={0.6} onPress={navigateToLogin}>
          <Text style={styles.signInText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} activeOpacity={0.6} onPress={navigateToSobre}>
        <Text style={styles.signInText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} activeOpacity={0.6} onPress={navigateToTeste}>
        <Text style={styles.signInText}>Teste sua sorte</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7e4b3',
  },
  title: {
    fontSize: 30,
    color: '#d2691e', // Marrom para o título (referência ao biscoito marrom)
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#d2691e', // Marrom claro para o subtítulo
    marginBottom: 40,
    textAlign: 'center'
  },
  signInButton: {
    width: 200,
    height: 34,
    backgroundColor: '#8b4513',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  signInText: {
    color: '#FFF',
    fontSize: 16
  }
})