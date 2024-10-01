import {SafeAreaView, Text, TextInput, StyleSheet, Switch, View, Button} from 'react-native'
import { globalStyles } from '../global/styles'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import React from 'react'

export default function FormBiscoito () {

    const [message, setMessage] = useState('')
    const [isSpecial, setIsSpecial] = useState(false)
    const [brand, setBrand] = useState('')
    const [prize, setPrize] = useState('0')

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

        <Picker selectedValue={brand} onValueChange={(option) => {setBrand(option)}} 
        style={{backgroundColor:'#FFF'}}
        >

            <Picker.Item value="Doritos" label='Doritos' />
            <Picker.Item value="Trakinas" label='Trakinas' />
            <Picker.Item value="Coca-cola" label='Coca-cola' />
            <Picker.Item value="Nasceu" label='Nascau' />
        </Picker>

        <Text style={styles.textDesign}>Valor do Premio:</Text>
        <TextInput 
            value={prize}
            onChangeText={setPrize}
            style={globalStyles.input}
            keyboardType='number-pad'
        />

        <Button title='Cadastrar' />



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
    },
    textDesign: {
        paddingTop: 15
    }
})