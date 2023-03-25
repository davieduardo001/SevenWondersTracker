import { StyleSheet } from 'react-native'

const salmon = '#ff9966' //SAMON COLOR

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      font: {
        color: salmon,
        fontSize: 15,
      },
    
      button: {
        padding: 13,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: salmon,
        margin: 40
      },
    
      buttonFont: {
        color: salmon,
        fontSize: 23,
      },
})

export default style