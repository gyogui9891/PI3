
import React from "react";
import { View, Text, StyleSheet, SectionList, SafeAreaView } from 'react-native';


const sectionListData = [
    {
      data: ["Este é o primeiro aviso do painel de avisos.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
    },
    {
        data:["Este é o segundo avisoasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]
    },
    {
        data:["Este é o segundo avisoasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]
    },
    {
        data:["Este é o segundo avisoasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]
    },
    {
        data:["Este é o segundo avisoasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]
    },
    {
        data:["Este é o segundo avisoasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function Panel() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>Painel de Avisos</Text>
            </View>
            <View style={styles.containerBody}>
            <SectionList
                sections={sectionListData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
            />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: 'transparent',
        marginTop:60,
    },
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
    item: {
        backgroundColor: "#fff",
        padding: 20,
        marginVertical: 8,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
})