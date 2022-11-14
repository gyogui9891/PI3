
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import * as Animatable from 'react-native-animatable'

import  { useNavigation } from '@react-navigation/native'

import { firebase } from "../../Config/firebase.js";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Welcome() {
    const navigation = useNavigation();

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const auth = firebase.auth()

     useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Main")
                console.log(user.email)
            }
        })

        //  return unsubscribe
    }, [])

    const handleSignIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                // console.log(user.email);
            })
            .catch(error => alert("E-mail de usuário e/ou senha inválidos."))
    }

    return (

        
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                
                <Animatable.Image
                    animation="flipInY"
                    source={require("../../assets/drawing.png")}
                    style={{ width: '50%',height:'85%'}}
                    resizeMode="contain"
                /> 
            </View>
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}> Painel de avisos e MarketPlace para o seu condomínio!</Text>
                    <View style={styles.containerFormInput}>
                    
                        <Text style={styles.text}>Login </Text>
                        <TextInput 
                            style={styles.inputText}
                            value={email}
                            onChangeText = {text => setEmail(text)}
                            placeholder="Digite o seu e-mail de login"
                            ></TextInput>
                    
                        <Text  style={styles.text} >Senha</Text>
                        <TextInput secureTextEntry={true} style={styles.inputText}
                            value={password}
                            placeholder="Digite a sua senha"
                            onChangeText={text => setPassword(text)}
                        ></TextInput>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={ () => handleSignIn()}>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                        </TouchableOpacity>
                    </View>

                </Animatable.View>

                <Animatable.View animation='fadeInUp' style={styles.containerFooter}>
                
                    <Text style={{alignItems:'center',fontSize:10,paddingStart:'5%',fontWeight:'bold'}}>
                        PI UNIVESP 2022 - Bruno, Fernando, Geraldo, Juliana, Luiz, Pedro, Sonia
                    </Text>

                </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#f6f6ed',

    },
    containerLogo:{
        flex: 1,
        paddingTop:'20%',
        backgroundColor: '#edeeeb',
        alignItems: 'center',
    },
    containerForm:{
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        backgroundColor: '#a6c6ff',
        overflow: 'hidden',
        paddingStart: '5%',
        paddingEnd: '5%',

    },

    containerFormInput:{
    },

    containerFooter:{
        flex: 0.2,
        top:'1%',

    },

    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:35,
        justifyContent:'center',
        alignItems:'center',
    },
    inputText:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },

    text:{
        marginTop: 4,
        fontSize: 16,
        fontWeight:'bold',
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

})
