import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LevelGrid } from './src/components/LevelGrid';
import level1 from './src/assets/level1.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Robot Despistado</Text>
      <View style={styles.content}>
        <LevelGrid level={level1} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
