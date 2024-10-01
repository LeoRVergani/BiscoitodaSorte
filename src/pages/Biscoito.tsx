import { StatusBar, StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';
import LottieView  from 'lottie-react-native'
import { useEffect, useState } from 'react';

const mensagem = [
    'As pessoas boas devem amar seus inimigos',
    'Se quiser chegar a ser alguém, devore os livros!',
    'Quem come tudo e não divide nada, acaba com a barriga inchada',
    'Quando a fome aperta, a vergonha afrouxa',
    'Não existe um mau trabalho, o mal é ter que trabalhar'
]



export default function Biscoito() {

    const [mensagemSelecionada, setMensagemSelecionada] = useState(' ')
    const [count, setCount] = useState(5)


function exibirMensagem() {
    const numeroAleatorio = Math.floor(Math.random() * 5)
    setMensagemSelecionada(mensagem[numeroAleatorio])
    setCount(count - 1)
    //mensagemSelecionado = mensagens[numeroAleatorio]
    // Alert.alert(mensagemSelecionado)
}




// useEffect(() => {
//     Alert.alert("Bem vindo, boa sorte.")
// }, [])

useEffect(() => {
    if(count === 0) {
    Alert.alert("Você acabou com seus biscoitos.")
    }
})

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar />

        <Text>{mensagemSelecionada}</Text>
        <Text>Quantidade de biscoitos {count}</Text>

        <LottieView 
        autoPlay
        source={require('../../assets/cookie.json')}
        style={{
            width: 200,
            height: 200
        }}
        />

        {
        count >= 1 ? <Button onPress={exibirMensagem} onClick={count} title='Quebrar biscoito'/> 
        :
        <Text>Acabaram seus biscoitos.</Text>
        } 


    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f7e4b3',
    alignItems: 'center',
    justifyContent: 'center',
    },
});