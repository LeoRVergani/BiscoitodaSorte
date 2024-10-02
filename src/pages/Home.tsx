import { useEffect, useState } from "react"
import { Text, Alert, ScrollView, FlatList, SafeAreaView, View, TouchableOpacity, StyleSheet, Image, Platform, TextInput, Button } from "react-native"
import axios from 'axios'
import {useFocusEffect} from '@react-navigation/native'
import React from "react"

// GET -> lista informacoes
// POST -> cadastrar um novo informacao
// DELETE -> deletar um informacao
// PUT -> atualiza informacoes

/*
string
number
bool
object
array
*/

type Biscoito = {
    id: number
    premio: string
    marca: string
    especial: boolean
    mensagem: string
}

export default function Home({navigation}) {

    const [biscoitos, setBiscoitos] = useState<Biscoito[]>([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const biscoitosFiltrados = biscoitos.filter(biscoito => biscoito.mensagem.toUpperCase().includes(search.toUpperCase()))

    /* 
    Forma com async await
    async function carregarDados() {
        try {
            const response = await axios.get('http://192.168.0.37:3000/biscoitos')
            setBiscoitos(response.data)
        } catch  {
            Alert.alert("Não foi possivel obter a lista de biscoitos")
        }
    }
    useEffect(() => {
        carregarDados()      
    }, []) // dispara uma única vez
    */

    function navigateToForm() {
        navigation.navigate('FormBiscoito')
    }

    useFocusEffect(() => {
        setLoading(true)

        axios
            .get(process.env.EXPO_PUBLIC_API_URL + '/biscoitos')
            .then((response) => {
            
                    setLoading(false)
                    setBiscoitos(response.data)
            
            })
            .catch(() => {
                Alert.alert("Não foi possivel obter a lista de biscoitos")
            })
    })



    return (
        <SafeAreaView style={styles.container}>

            <Text>Números de biscoitos: {biscoitos.length}</Text>

            <TextInput
                style={{ borderWidth: 1, width: '90%', height: 50, margin: 10, padding: 10, backgroundColor: '#FFF' }}
                value={search}
                onChangeText={setSearch}
                placeholder="Pesquise aqui seu biscoito"
            />

            <Button title="Novo biscoito" onPress={navigateToForm}/>
 
            <FlatList
                ListEmptyComponent={() => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            loading ? (
                                <>
                                    {

                                        /*
                                    <LottieView
                                        autoPlay
                                        style={{ width: 300, height: 300 }}
                                        source={require('../../assets/loading.json')}
                                    />*/

                                    }
                                    <Text>Carregando ...</Text>
                                </>

                            ) : <Text>Não existem biscoitos</Text>
                        }
                    </View>
                )}
                data={biscoitosFiltrados} // array que deseja renderiza
                renderItem={({ item }) => (
                    <>
                    <TouchableOpacity style={styles.item} >
                        <Text>#{item.mensagem}</Text>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1450/1450139.png', width: 50, height: 50 }} />
                        <Text style={styles.itemText}>
                            {
                                Platform.OS === "ios" ?
                                    'Comprar biscoito' :
                                    'Ganhar biscoito'
                            }
                        </Text>
                    </TouchableOpacity>
                    </>
                )}
                // keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={{
                    padding: 10,
                    paddingBottom: 50,
                    gap: 20,

                }}
                columnWrapperStyle={{
                    gap: 10,
                }}
                showsVerticalScrollIndicator={false}

            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ff9933', // Fundo laranja
    },
    item: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: '#8b4513',
        padding: 5

    },
    itemText: {
        color: '#8b4513', // Texto marrom
        marginTop: 10,
        fontWeight: 'bold',
    },
})