
import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { firebase } from "../../Config/firebase.js";

import  { useNavigation } from '@react-navigation/native'

export default function Conta() {

    const navigation = useNavigation();
    const handleSignOut = () => {
        firebase.auth()
            .signOut()
            .then(() => {
                navigation.replace("Notifício")
                alert("Logoff feito com sucesso!")
            })
    }

    return (

        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>Informações da Conta</Text>
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.textBody}>Você está logado(a) como:</Text> 
                <Text style={styles.textLoggedUser}>{firebase.auth().currentUser?.email}</Text>
                <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
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
    },
    
    button:{
        marginTop:35,
        alignItems:'center',
        fontSize:25,
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:6,
        paddingVertical:8,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
    },
    textBody:{
        fontSize: 25,
    },
    textLoggedUser:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})
