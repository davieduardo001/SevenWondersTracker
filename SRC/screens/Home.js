import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/style'
import Icon from '../components/Icon'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

        <Icon COLOR='yellow' USERNAME='Player1' SIZE={110} />

        <TouchableOpacity onPress={ () => navigation.navigate("Player") }>
            <View style={styles.button}>
                <Text style={styles.buttonFont}>PLAY</Text>
            </View>
        </TouchableOpacity>

        <Icon COLOR='purple' USERNAME='Player2' SIZE={110} />

        <StatusBar style="auto" />
    </View>
  )
}