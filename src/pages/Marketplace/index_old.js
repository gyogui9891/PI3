
import React, {useState, useEffect} from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Image, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

itemSeparator = () => {
    return <View style={styles.separator} />
}

export default function Main() {
    const [modalVisible, setModalVisible] = useState(false);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState([]);

    const [produtoAll, setProduto] = useState([]);
    
    const [produtoNovo, setProdutonaTela] = useState('');
    const [valorNovo, setValornaTela] = useState('')
    const [descricaoNovo, setDescricaonaTela] = useState('')


    let key = produtoAll.length

    function addtoList (){
        produtoAll.push({id: ++key, conteudo: produtoNovo, valor: valorNovo, descricao:descricaoNovo});
        setProduto([...produtoAll]);
        setModalVisible(!modalVisible);
    }

    // useEffect(() => {
    //     (async () => {
    //         const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //         setHasGalleryPermission(galleryStatus.status === 'granted');
    //     })();
    // }, []);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [4,4],
    //         quality:1
    // })

//     if (!result.cancelled){
//         setImage(result.uri);

//     }
//     console.log(result)
// };
//     if (hasGalleryPermission == false){
//         return alert('Sem permissão para acesso ao rolo de camera. Revise as configurações de permissão para o app.')
//     }


    console.log(image)
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleHome}>MarketPlace</Text>
            </View>
            <View style={styles.containerBody}>
                {/* //Aqui vai aparecer os itens */}

                <FlatList style={styles.flatListContainer}
                    data={produtoAll}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>
                            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}></View>{"\n\n"}
                            Produto: {item.conteudo} {"\n\n"}
                            Valor: {item.valor} {"\n\n"}
                            Descrição: {item.descricao}{"\n\n"}
                        </Text>
                    )}
                    //separador
                    ItemSeparatorComponent={itemSeparator}
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
                                <Text style={styles.textTitleModal}>Insira as informações sobre o produto ou serviço que está oferecendo:</Text>
                                <Text>Produto/Serviço:</Text>
                                <TextInput 
                                    placeholder="Escreva o nome do produto/serviço aqui" 
                                    multiline={false}
                                    style={styles.textInputModal}
                                    onChangeText={(value) => setProdutonaTela(value)}
                                    />
                                <Text>Valor:</Text>
                                <TextInput 
                                    placeholder="Escreva o valor aqui" 
                                    multiline={false}
                                    style={styles.textInputModal}
                                    onChangeText={(value) => setValornaTela(value)}
                                    />
                                <Text>Descrição:</Text>
                                <TextInput
                                    placeholder="Escreva a descrição aqui" 
                                    multiline={true}
                                    style={styles.textInputProductDescriptionModal}
                                    onChangeText={(value) => setDescricaonaTela(value)}
                                    />
                                {/* <TouchableOpacity style={styles.buttonPickImage} onPress={() => ()}>
                                <Text>Insira aqui a foto do produto</Text>
                                </TouchableOpacity> */}
                                {/* {image && <Image source={{uri: image}} style={{flex:15, height:250,width:250}}/>} */}
                                <View style={styles.containerButtonRow}>
                                <TouchableOpacity style={styles.buttonModal} onPress={() => addtoList()}>
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