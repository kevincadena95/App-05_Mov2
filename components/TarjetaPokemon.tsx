import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function TarjetaPokemon(props: any) {


    return (
        <View style={styles.tarjeta}>

            <Image
                style={styles.imagen}
                source={{
                    uri: pokemon.sprites.front_default
                }}
            />

            <Text style={styles.nombre}>
                {pokemon.name}
            </Text>

            <Text>ID: {pokemon.id}</Text>

            <Text>
                Tipo: {pokemon.types[0].type.name}
            </Text>

            <Text>Altura: {pokemon.height}</Text>

            <Text>Peso: {pokemon.weight}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    tarjeta: {
        backgroundColor: 'white',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3
    },

    imagen: {
        width: 150,
        height: 150
    },

    nombre: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: 8
    }
})