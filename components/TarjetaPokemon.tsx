import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function TarjetaPokemon(props: any) {

    return (
        <View style={styles.container}>

            <Text style={styles.letra}>
                Nombre: {props.datos.name}
            </Text>

            <View style={styles.fila}>

                <View style={styles.datos}>
                    <Text style={styles.letra}>
                        Tipo: {props.datos.types[0].type.name}
                    </Text>

                    <Text style={styles.letra}>
                        Altura: {props.datos.height}
                    </Text>

                    <Text style={styles.letra}>
                        Peso: {props.datos.weight}
                    </Text>

                   
                </View>

                <Image
                    style={styles.img}
                    source={{
                        uri: props.datos.sprites.front_default
                    }}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#df4545',
        margin: 7,
        padding: 10
    },

    fila: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    datos: {
        width: '70%',

    },

    letra: {
        fontSize: 20,
        color: 'white'
    },

    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }

})