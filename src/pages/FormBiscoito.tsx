import {SafeAreaView, Text, TextInput, StyleSheet, Switch, View} from 'react-native'
import { globalStyles } from '../global/styles'
import { useState } from 'react'

export default function FormBiscoito () {

    const [message, setMessage] = useState('')
    const [isSpecial, setIsSpecial] = useState(false)

    return (
        <SafeAreaView style={styles.container}>

        <Text>Mensagem do biscoito:</Text>

        <TextInput 
            value={message}
            onChangeText={setMessage}
            style={globalStyles.input}
        />

        <View style={styles.switchContainer}>
            <Text>É um biscoito espacial</Text>

            <Switch 
                value={isSpecial} 
                onValueChange={setIsSpecial}
            />

        </View>



        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ff9933', // Fundo laranja
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})