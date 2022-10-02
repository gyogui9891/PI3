
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput, Modal } from 'react-native';

//Cria o objeto do separador de linhas:
itemSeparator = () => {
    return <View style={styles.separator} />
}

export default function Panel() {
    // Cria o array que vai armazenar os novos avisos:
    const [aviso, avisolist] = useState ( [
       
    ]);
    // cria o bool que vai fazer o switch de estado para o modal
    const [modalVisible, setModalVisible] = useState(false);
    
    // cria a variável que vai guardar o tamanho do array
    let key = aviso.length

    // cria o timestamp formatado para aparecer a cada novo aviso
    let timestamp = new Date();
    let date = timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getFullYear();
    let time = timestamp.getHours() + ':' + timestamp.getMinutes() + ':' + timestamp.getSeconds();
    let fullDateTime = date + ' ' + time

    // cria o estado para a variavel pra ser usada no TextInput para guardar o valor para ser mostrado na tela
    const [avisonovo, setAviso] = useState('');

    // funcao acionada pelo botao Salvar do modal e que mostra o item adicionado na tela
    function addtoList(){
        aviso.push({id: ++key, conteudo:fullDateTime + ' \n\n ' + avisonovo});
        avisolist([...aviso]);
        setModalVisible(!modalVisible);
    }

    return (
        // cria a estrutura de components
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>Painel de Avisos</Text>
            </View>
            <View style={styles.containerBody}>
                {/* //cria o flatlist que vai receber os items que sao inseridos no modal pela funcion addtoList */}
                <FlatList style={styles.flatListContainer}
                    data={aviso}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.conteudo}</Text>
                    
                    )}
                    //separador
                    ItemSeparatorComponent={itemSeparator}
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={() => {setModalVisible(true)}}>
                    <Text style={styles.buttonAddText}>+</Text>
                </TouchableOpacity>

                        {/* //cria o modal que popa na tela quando clica no botão + */}
                <Modal
                transparent = {true}
                animationType = "slide" visible={modalVisible}
                >
                        <SafeAreaView>
                            <View style={styles.containerModal}>
                                <Text style={styles.textTitleModal}>Escreva a mensagem a ser inserida no painel de avisos no campo abaixo:</Text>
                                <TextInput 
                                    placeholder="Escreva o texto aqui" 
                                    multiline={true}
                                    style={styles.textInputModal}
                                    onChangeText={(value) => setAviso(value)}
                                    />
                                <TouchableOpacity style={styles.buttonModalSave} onPress={ () => addtoList()}>
                                    <Text style={{fontSize:20}}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                </Modal>
            
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
    containerModal:{
        paddingStart:10,
        paddingEnd:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        width:'100%',
        height:'75%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    titleHome:{
        fontSize:30,
        textAlign:'center',
    },
    textBody:{
        fontSize: 25,
    },
    textTitleModal:{
        alignItems:'center',
        justifyContent:'center',
        fontSize: 20,
        paddingStart:10,
        marginTop: 20,
        marginBottom: 20,
    },

    textInputModal: {
        paddingStart:5,
        paddingEnd:5,
        width:'100%',
        height:'40%',
        backgroundColor: '#a6c6ff',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
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
    buttonAdd:{
        backgroundColor: 'blue',
        alignItems:'center',
        marginTop:45,
        marginBottom:12,
        fontSize:25,
        backgroundColor:'#fff',
        width:'25%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingVertical:15,
        
    },
    buttonAddText:{
        fontSize:20,

    },
    buttonModalSave:{
        backgroundColor: 'blue',
        alignItems:'center',
        marginTop:12,
        marginBottom:12,
        fontSize:25,
        backgroundColor:'#a6c6ff',
        width:'25%',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        paddingVertical:15,
    },
    separator:{
        height:2,
        marginTop:0,
        marginBottom:0,
        width:'100%',
        backgroundColor:"black",
    },
    flatListContainer:{
        marginTop:20,
        width:'100%',
    }
})