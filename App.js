import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1a1a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flex: 1,
    bottom: '50%',
    fontSize: '15', 
  }
});
