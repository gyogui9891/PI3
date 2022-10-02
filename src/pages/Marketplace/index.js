
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
    return (

        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>MarketPlace</Text>
            </View>
            <View style={styles.containerBody}>
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
