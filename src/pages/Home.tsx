import { useEffect, useState } from "react"
import { Text, Alert, ScrollView } from "react-native"
import axios from 'axios'

// GET -> lista informacoes
// POST -> cadastrar um novo informacao
// DELETE -> deletar um informacao
// PUT -> atualiza informacoes

export default function Home(){

    const [biscoitos, setBiscoitos] = useState([])

    useEffect(() => {
        axios
        .get('http://192.168.100.11:3000/biscoitos')
        .then((response) => {
            setTimeout(() => {
            setBiscoitos(response.data)
            }, 5000)
        })
        .catch(() => {
            Alert.alert("Não foi possivel obter os biscoitos, comeram todos!") 
        })

    }, []) // dispara uma única vez

    return (
        <ScrollView>
            {biscoitos.map((biscoito) => (
                <Text>{biscoito.message}</Text>
            ))}
        </ScrollView>
    )
}