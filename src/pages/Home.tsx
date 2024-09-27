import { useEffect, useState } from "react"
import { Text, Alert, ScrollView, FlatList, View, SafeAreaView } from "react-native"
import axios from 'axios'

// GET -> lista informacoes
// POST -> cadastrar um novo informacao
// DELETE -> deletar um informacao
// PUT -> atualiza informacoes

type Biscoito = {
    id: number
    premio: string
    marca: string
    especial: boolean
    mensagem: string
}

export default function Home(props){

    const [biscoitos, setBiscoitos] = useState<Biscoito[]>([])



    /*
    async function carregarDados() {
        try {
            axios.get('http://192.168.100.11:3000/biscoitos')
            setBiscoitos(response.data)
        } catch (error) {
            Alert.alert("Não foi possivel obter os biscoitos, comeram todos!") 
        }
    }

    useEffect(() => {
        carregarDados()
    }, []) // dispara uma unica vez

    */

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
        <SafeAreaView>
            <FlatList 
                data={biscoitos} // array que deseja renderiza
                renderItem={({item}) => (
                    <View style={{width: '30%', height:50}}>
                        <Text>{item.mensagem}</Text>
                    </View>
                )}
                numColumns={3}
                ListEmptyComponent={() => (
                    <View><Text>Sem nada aqui.</Text></View>
                )}
            /> 

            {/* <ScrollView>{biscoitos.map((biscoito) => (<Text>{biscoito.message}</Text>))}</ScrollView> */}


        </SafeAreaView>
    )
}