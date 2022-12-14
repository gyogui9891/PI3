
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput, Modal, Keyboard, ImageEditor } from 'react-native';
// import { doc, setDoc } from "firebase/firestore";
import {firebase} from "../../Config/firebase.js";
import { useNavigation } from '@react-navigation/native'

//Cria o objeto do separador de linhas:
itemSeparator = () => {
    return <View style={styles.separator} />
}

const MarketPlace = () => {

        const [produto, setProduto] = useState([]);
        const produtosRef = firebase.firestore().collection('Produtos');
        const [addProdutos, setAddProdutos] = useState('');
        const [addValor, setAddValor] = useState('');
        const [addDescricao, setAddDescricao] = useState('');
        const [modalVisible, setModalVisible] = useState(false);

        const [time, setTime] = useState(null);

    //     useEffect(() => {
          
    //         let time = newTimeStamp()
    //         setTime(time);
    //     }, []);

    // const newTimeStamp = () => { 
    //         let today = new Date();
    //         let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    //         let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    //         let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    //         return hours + ':' + minutes + ':' + seconds;
    //         Alert.alert('passei');
    // }

    useEffect(() => {

        produtosRef
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            querySnapshot => {
                const produto = []
                querySnapshot.forEach((docMP) => {
                    const {nomeproduto} = docMP.data()
                    const {valor} = docMP.data()
                    const {descricao} = docMP.data()
                    produto.push({
                        id: docMP.id,
                        nomeproduto: nomeproduto,
                        valor: valor,
                        descricao: descricao
                    })
                })
                setProduto(produto)
            }
        )

    }, [])
//USEEFFECT OK


// //deletar um aviso
//     const deleteAvisos = (produto) => {
//         produtosRef
//             .doc(aviso.id)
//             .delete()
//             .then(() => {
//                alert('Removido com sucesso')
//             })
//             .catch(error => {
//                 alert(error);
//             })

//     }

//DELETAR AVISO OK

//adicionar um aviso
    const addProduto = () => {
        //checar se h?? um aviso
        if (addProdutos && addProdutos.length > 0){
            //pega o horario
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();  
            const data = {
                createdAt: timestamp,
                nomeproduto: addProdutos,
                valor: addValor,
                descricao:addDescricao
            };
            produtosRef
                .add(data)
                .then(() => {
                    setAddProdutos('');
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
                <Text style={styles.titleHome}>MarketPlace</Text>
            </View>
            <View style={styles.containerBody}>
            <FlatList
                    style={styles.flatListContainer}
                    data={produto}
                    numColumns={1}
                    renderItem={( {item} ) => (
                        //DELETE ITEM 21:00 DO VIDEO
                        <View>
                            <Text style={styles.item}>
                            {"\n\n"}
                                Produto: {item.nomeproduto} {"\n\n"}
                                Valor: {item.valor} {"\n\n"}
                                Descri????o: {item.descricao}{"\n\n"}
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
                                <Text style={styles.textTitleModal}>Insira as informa????es sobre o produto ou servi??o que est?? oferecendo:</Text>
                                <Text>Produto/Servi??o:</Text>
                                <TextInput 
                                    placeholder="Escreva o nome do produto/servi??o aqui" 
                                    multiline={false}
                                    style={styles.textInputModal}
                                    onChangeText={(nomeproduto) => setAddProdutos(nomeproduto)}
                                    />
                                <Text>Valor:</Text>
                                <TextInput 
                                    placeholder="Escreva o valor aqui" 
                                    multiline={false}
                                    style={styles.textInputModal}
                                    onChangeText={(valor) => setAddValor(valor)}
                                    />
                                <Text>Descri????o:</Text>
                                <TextInput
                                    placeholder="Escreva a descri????o aqui" 
                                    multiline={true}
                                    style={styles.textInputProductDescriptionModal}
                                    onChangeText={(descricao) => setAddDescricao(descricao)}
                                    />
                                {/* <TouchableOpacity style={styles.buttonPickImage} onPress={() => ()}>
                                <Text>Insira aqui a foto do produto</Text>
                                </TouchableOpacity> */}
                                {/* {image && <Image source={{uri: image}} style={{flex:15, height:250,width:250}}/>} */}
                                <View style={styles.containerButtonRow}>
                                <TouchableOpacity style={styles.buttonModal} onPress={addProduto}>
                                    <Text style={{fontSize:20}}>Salvar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonModal} onPress={() => setModalVisible(!modalVisible)}>
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
        height:'85%',
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
        marginTop:4,
        marginBottom:4,
        width:'100%',
        height:'5%',
        backgroundColor: '#a6c6ff',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    textInputProductDescriptionModal:{
        paddingStart:5,
        paddingEnd:5,
        marginTop:4,
        marginBottom:4,
        width:'100%',
        height:'15%',
        backgroundColor:'#a6c6ff',
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
        position: "absolute",
        bottom: 0,
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
    buttonPickImage:{
        backgroundColor:'#d9e7ff',
        paddingStart:4,
        paddingEnd:4,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        marginBottom:12,
        marginTop:12,
        width:'65%',
        height:'5%',
        alignItems:'center',
        justifyContent:'center'

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

export default MarketPlace;