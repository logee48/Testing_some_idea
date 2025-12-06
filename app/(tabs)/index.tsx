import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = getStyles(isDark);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Simple React Native App</Text>
        <Text style={styles.subtitle}>Tested for Android</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome to Your App</Text>
        <Text style={styles.cardText}>
          This is a  React Native application built with Expo that works on Android.
        </Text>
      </View>

      <View style={styles.counterSection}>
        <Text style={styles.counterLabel}>Counter:</Text>
        <Text style={styles.counterValue}>{count}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.resetButton]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>How to Run on Android</Text>
        <Text style={styles.cardText}>
          1. Make sure you have Android Studio and an emulator installed{'\n'}
          2. Run: npm run android{'\n'}
          3. The app will launch in your Android emulator
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
      marginTop: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: isDark ? '#ccc' : '#666',
    },
    card: {
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      borderLeftWidth: 4,
      borderLeftColor: '#007AFF',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
      marginBottom: 8,
    },
    cardText: {
      fontSize: 14,
      color: isDark ? '#aaa' : '#555',
      lineHeight: 20,
    },
    counterSection: {
      alignItems: 'center',
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      borderRadius: 12,
      padding: 24,
      marginBottom: 20,
    },
    counterLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#ccc' : '#666',
      marginBottom: 12,
    },
    counterValue: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
      marginBottom: 12,
      width: '100%',
      alignItems: 'center',
    },
    resetButton: {
      backgroundColor: '#666',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
