
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput, Modal, Keyboard, ImageEditor } from 'react-native';
// import { doc, setDoc } from "firebase/firestore";
import {firebase} from "../../Config/firebase.js";
import { useNavigation } from '@react-navigation/native'

//Cria o objeto do separador de linhas:
itemSeparator = () => {
    return <View style={styles.separator} />
}

const Panel = () => {

        const [aviso, setAviso] = useState([]);
        const avisosRef = firebase.firestore().collection('Avisos');
        const [addData, setAddData] = useState('');
        const [modalVisible, setModalVisible] = useState(false);

        const [time, setTime] = useState(null);

        useEffect(() => {
          
            let time = newTimeStamp()
            setTime(time);
        }, []);

    const newTimeStamp = () => { 
            let today = new Date();
            let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
            let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
            let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
            return hours + ':' + minutes + ':' + seconds;
            Alert.alert('passei');
    }

    useEffect(() => {

        avisosRef
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            querySnapshot => {
                const aviso = []
                querySnapshot.forEach((doc) => {
                    const {conteudo} = doc.data()
                    aviso.push({
                        id: doc.id,
                        conteudo: conteudo,
                        inseridoem: newTimeStamp()
                    })
                })
                setAviso(aviso)
            }
        )

    }, [])
//USEEFFECT OK


//deletar um aviso
    const deleteAvisos = (aviso) => {
        avisosRef
            .doc(aviso.id)
            .delete()
            .then(() => {
               alert('Removido com sucesso')
            })
            .catch(error => {
                alert(error);
            })

    }

//DELETAR AVISO OK

//adicionar um aviso
    const addAviso = () => {
        //checar se h?? um aviso
        if (addData && addData.length > 0){
            //pega o horario
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();  
            const data = {
                createdAt: timestamp,
                conteudo: addData,
            };
            avisosRef
                .add(data)
                .then(() => {
                    setAddData('');
                    //liberar teclado
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
            
        }
        setModalVisible(!modalVisible)
    }
 
    return (
        
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>Painel de Avisos</Text>
            </View>
            <View style={styles.containerBody}>
            <FlatList
                    style={styles.flatListContainer}
                    data={aviso}
                    numColumns={1}
                    renderItem={( {item} ) => (
                        //DELETE ITEM 21:00 DO VIDEO
                        <View>
                            <Text style={styles.item}>
                            {"\n\n"}
                                {item.conteudo[0].toUpperCase() + item.conteudo.slice(1)}
                            </Text>
                        </View>
                    )}
                    ItemSeparatorComponent = {itemSeparator}
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={() => {setModalVisible(true)}}>
                    <Text style={styles.buttonAddText}>+</Text>
            </TouchableOpacity>
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
                                    onChangeText={(conteudo) => setAddData(conteudo)}
                                    value={addData}
                                    />
                                <View style={styles.containerButtonRow}>
                                <TouchableOpacity style={styles.buttonModal} onPress={addAviso}>
                                    <Text style={{fontSize:20}}>Salvar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonModal} onPress={ () => setModalVisible(!modalVisible)}>
                                    <Text style={{fontSize:20}}>Cancelar</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                </Modal>  

            </View>
        </View>

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
    containerButtonRow:{
        flexDirection:'row',
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
    buttonModal:{
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
        marginHorizontal: 20,
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

export default Panel;