import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = getStyles(isDark);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Learn about this app</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About This App</Text>
        <Text style={styles.text}>
          This is a simple React Native application built with Expo and designed to work seamlessly on Android devices.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <Text style={styles.text}>
          • Simple and clean user interface{'\n'}
          • Interactive counter for demonstration{'\n'}
          • Dark/Light theme support{'\n'}
          • Cross-platform compatibility{'\n'}
          • Easy to extend and customize
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technology Stack</Text>
        <Text style={styles.text}>
          • React 19.1.0{'\n'}
          • React Native 0.81.5{'\n'}
          • Expo 54.0.27{'\n'}
          • TypeScript{'\n'}
          • Expo Router for navigation
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Getting Started</Text>
        <Text style={styles.text}>
          1. Install dependencies with npm{'\n'}
          2. Start the app with npm run android{'\n'}
          3. Interact with the counter on the home screen{'\n'}
          4. Try different features and explore the code
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Next Steps</Text>
        <Text style={styles.text}>
          • Modify the counter to accept input{'\n'}
          • Add more screens using Expo Router{'\n'}
          • Connect to an API{'\n'}
          • Add animations with React Native Reanimated{'\n'}
          • Deploy to production
        </Text>
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Resources</Text>
        <Text style={styles.text}>
          • React Native: https://reactnative.dev{'\n'}
          • Expo: https://expo.dev{'\n'}
          • Expo Router: https://docs.expo.dev/router
        </Text>
      </View>
    </ScrollView>
  );
}

function getStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#000' : '#fff',
    },
    content: {
      padding: 20,
      paddingBottom: 40,
    },
    header: {
      marginBottom: 30,
      marginTop: 10,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: isDark ? '#ccc' : '#666',
    },
    section: {
      marginBottom: 24,
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      borderRadius: 12,
      padding: 16,
    },
    lastSection: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 10,
    },
    text: {
      fontSize: 14,
      lineHeight: 22,
      color: isDark ? '#aaa' : '#555',
    },
  });
}
