import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Novo aplicativo 2 .......</Text>
      <Text style={styles.title2}>Andrea</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight:'bold',
    color:'black',
    fontSize: 30,
  },

  title2:{
    fontWeight:'bold',
    color:'red',
    fontSize: 30,
  }



});
