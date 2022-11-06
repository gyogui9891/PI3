
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
    return (

        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>Bem-vindo(a) ao CondoInfo!</Text>
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.textBody}>Aqui você encontrará todas as novidades sobre o seu 
                condomínio na aba "Painel de Avisos", além de poder anunciar seus itens 
                para doação ou venda na aba "Marketplace" e negociar com seus vizinhos! :)
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#f6f6ed',
        marginTop:60,
    },
    containerTitle:{
        flex:1,
        fontWeight:'bold',
    },
    containerBody:{
        flex:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a6c6ff',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:10,
        paddingEnd:10,
    },
    titleHome:{
        fontSize:30,
        textAlign:'center',
    },
    textBody:{
        fontSize: 25,


    }
})
