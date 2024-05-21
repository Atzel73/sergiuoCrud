import react, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, TextInput, Alert, Modal, TouchableOpacity, StyleSheet } from "react-native";

import * as ImagePicker from 'expo-image-picker';

export default function Lista() {
    const [newData, setNewData] = useState(null);
    const [userRol, setUserRol] = useState({
        name: "",
        photo: null
    });
    const [userRoles, setUserRoles] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [showRol, setShowRol] = useState(true);
    useEffect(() =>{
        if (userRoles.length === 15) {
            Alert.alert("No puedes agregar mas");
            setShowRol(false);
        }
    }, [userRoles])

    const newUser = () => {
        setUserRoles([...userRoles, { ...userRol }])
        setUserRol({ name: "", photo: null });
        console.log("Roles: ", userRoles);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

         if (!result.canceled) {
            console.log("resultado: ", result.assets[0].uri);
            setUserRol({ ...userRol, photo: result.assets[0].uri});
         }
    };

    return(
        <ScrollView>
            <ScrollView>
                <View style = {[styles.viewMain, modalVisible ? { opacity: 0.1 } : { opacity: 1 }]}>
                    <Text 
                        style = {{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'center',
                            padding: 0
                        }}>
                            Mundo
                        </Text>

                        {showRol &&
                            <View style = {{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                <TextInput
                                    value = {userRol.name}
                                    style = {styles.text}
                                    onChangeText={(text) => setUserRol({ ...userRol, name: text })}
                                    placeholder="Nombre"
                                />
                                <TouchableOpacity
                                    onPress = {pickImage}
                                    style = {styles.boton}
                                >
                                    <Text>
                                        Galeria
                                    </Text>
                                </TouchableOpacity>
                                {userRol.photo && userRol.name &&
                                    <View>
                                        <image
                                            style = {styles.image}
                                            source = {{uri: userRol.photo}}
                                        />
                                    </View>
                                }
                                {!userRol.photo && !userRol.name &&
                                    <View>
                                        <Text>No has seleccionado nada!</Text>
                                    </View>
                                }
                            </View>
                        }

                        <View>
                            <TouchableOpacity
                                onPress = {newUser}
                                style = {{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
                            >
                                <View>
                                    Vaciar
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            decelerationRate={"normal"}
                            alwaysBounceHorizontal={"true"}
                            horizontal
                        >
                            {userRoles &&
                                userRoles.map((map, index) => {
                                    return(
                                        <View
                                            key = {index}
                                            style = {{ alignItems: 'center', justifyContent: 'center', margin: 10, padding: 10 }}
                                        >
                                            <image 
                                                style = {styles.image}
                                                source = {{ uri: item.photo }}
                                            />
                                            <View style={{ position: 'absolute', justifyContent: 'center', margin: 10, padding: 10 }}>
                                                <Text style={{ color: 'white', fontSize: 18, }}>{item.name}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => { setModalVisible(!modalVisible), setNewData(item) }}
                                                style = {styles.boton}
                                            >
                                                <Text>
                                                    Mostrar modal
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                </View>
            </ScrollView>

            {newData === null ?
                <View>
                    <Text>

                    </Text>
                </View>  

                :

                <View>
                    <Modal
                        animationType="slide"
                        onRequestClose={() => { setModalVisible(!modalVisible) }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    style={styles.buttonClose}
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                >
                                    <Text>
                                        Cerrar
                                    </Text>
                                </TouchableOpacity>
                                <Image 
                                    source={{ uri: newData.photo }}
                                    style={styles.image}
                                />
                                <Text style={styles.text}>{newData.name}</Text>
                            </View>
                        </View>

                    </Modal>
                </View>
        }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewMain: {
        flex: 1,
        justifyContnent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
        aspectRatio: 4 / 4,
    },
    boton: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 90,
        padding: 10,
        margin: 10
    },
    text: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: '#fff',
        color: '#000',
        textAlignVertical: 'center',
        marginTop: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 5,
        margin: 10,
        padding: 3,
        paddingVertical: 20,
        paddingHorizontal: 15,

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 5,
        margin: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
