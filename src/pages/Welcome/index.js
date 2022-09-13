
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Welcome() {
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
                    <Text style={styles.text}>
                        Login
                    </Text>
                    <Text style={styles.text}>
                        Senha
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation='fadeInUp' style={styles.containerFooter}>
                    <Text style={{alignItems:'center',fontSize:11,paddingStart:'5%',fontWeight:'bold'}}>
                        PI UNIVESP 2022 - Bruno, Fernando, Geraldo, Juliana, Luiz, Pedro
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
    containerFooter:{
        flex: 0.2,
        top:'1%',

    },

    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        

    },

})