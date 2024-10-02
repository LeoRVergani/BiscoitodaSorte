import { SafeAreaView, Text, StyleSheet, TextInput, Switch, View, Button, Alert } from "react-native";
import { globalStyles } from "../global/styles";
import { useState } from "react";

import { Picker } from '@react-native-picker/picker'
import axios from "axios";
import { NavigationProp } from '@react-navigation/native'

interface FormBiscoitoProps {
    navigation: NavigationProp<any>
}

export default function FormBiscoito({ navigation }: FormBiscoitoProps) {

    const [message, setMessage] = useState('')
    const [isSpecial, setIsSpecial] = useState(false)
    const [brand, setBrand] = useState('')
    const [prize, setPrize] = useState('0')

    function handleSave() {

        if(message === '') {
            Alert.alert("Atenção", "A mensagem é obrigatória.")
        } else if (isSpecial === true && brand === '') {
            Alert.alert("Atenção", "A marca é obrigatória.")
        } else if (isSpecial === true && Number(prize) <= 0 || isNaN(Number(prize))) {
            Alert.alert("Atenção", "Valor do prêmio deve ser maior que 0")
        } else {
            
            axios.post(process.env.EXPO_PUBLIC_API_URL + '/biscoitos', {
                mensagem: message,
                especial: isSpecial,
                premio: prize,
                marca: brand
            }).then(() => {
                Alert.alert("Atenção", "Cadastrado com sucesso!")
                navigation.navigate("Home")
            })
            .catch(() => {
                Alert.alert("Atenção", "Não foi possivel cadastrar o biscoito.")
            })
            // POST
            // Biscoito
            // 
        }

        // Salvar
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text>Mensagem do biscoito:</Text>
            <TextInput
                value={message}
                onChangeText={setMessage}
                style={globalStyles.input}
            />

            <View style={styles.switchContainer}>
                <Text>É um biscoito especial ?</Text>
                <Switch value={isSpecial} onValueChange={setIsSpecial} 
                /*trackColor={{
                    true: message === 'sorte' ? 'green' : 'false'
                }} 
                */
                />
            </View>

            {
                isSpecial === true &&
                <>
                    <Text >Marca do prêmio</Text>
                    <Picker
                        selectedValue={brand}
                        onValueChange={(option) => setBrand(option)}
                        style={{ backgroundColor: '#FFF', marginVertical: 10 }}
                    >
                        <Picker.Item value="" label="Selecione uma marca." />
                        <Picker.Item value="Doritos" label="Doritos" />
                        <Picker.Item value="Traquinas" label="Traquinas" />
                        <Picker.Item value="Milka" label="Milka" />
                    </Picker>

                    <Text>Valor do premio:</Text>
                    <TextInput
                        value={prize}
                        onChangeText={setPrize}
                        style={globalStyles.input}
                        keyboardType="number-pad"
                        contextMenuHidden
                    />
                </>
            }
        <Button title='Cadastrar' onPress={handleSave}/>



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