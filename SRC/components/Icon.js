import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from '../styles/style'

export default function Icon({ COLOR, USERNAME, SIZE }) {
  return (
    <View>
        <View style={{ backgroundColor: 'black', borderWidth: 5, borderColor: COLOR, borderRadius: 60}}>
            <Image style={{ width: SIZE, height: SIZE}} source={require('../imgs/pfp.png')}/>
        </View>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: COLOR, fontSize: 15,}}>{USERNAME}</Text>
        </View>
    </View>
  )
}