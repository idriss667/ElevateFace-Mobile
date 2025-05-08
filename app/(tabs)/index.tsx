import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function HomeScreen() {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
        🚀 ElevateFace Mobile
      </Text>
      <Text style={[styles.subtitle, { color: isDark ? '#aaa' : '#333' }]}>
        Interface mobile multi-plateforme — self improvement, structuration, excellence.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
