import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import React from 'react'


/* CREAR UN NAVEGACION ANINADA, DEBEN USAR STACK Y OTRO NAVEGADOR 
CREAR UN BOTON QUE AL PRESIONARLO NOS LLEVE AL OTRO NAVEGADOR
PONER UNA IMAGEN DE FONDO*/

export default function WelcomeScreen({navigation}: any) {
    return (
                <ImageBackground
            source={{ uri: "https://i.postimg.cc/D0MTgnDz/450-1000.jpg" }}
            style={styles.container}>
            
            <Button
            title="Ingresar"
            onPress={()=>navigation.navigate("MyDrawer")}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

        container: {
        justifyContent: 'center',       
        flex: 1,
        alignItems: 'center'
    }
})