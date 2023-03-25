import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/style'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.font}>TEST</Text>
        
        <StatusBar style="auto" />
    </View>
  )
}