import {StyleSheet, Text, View, FlatList, TextInput, Button, Alert, } from 'react-native'

import React, { useState } from 'react'
import TarjetaPokemon from '../components/TarjetaPokemon'

/*
LEER LA API Y TRAER UNA LISTA DE POKEMONS

CREAR UNA POKEDEX DONDE SE INGRESE EL NOMBRE DEL POKEMON
APLICAR PROPS Y COMPONENTES FUNCIONALES
PARA VER LA INFORMACIÓN DEL POKEMON SELECCIONADO
*/

export default function PokemonScreen() {

    const [nombre, setNombre] = useState('')
    const [pokemon, setPokemon] = useState<any>(null)

    const listaPokemon = [
        'pikachu',
        'charmander',
        'ditto',
        'charizard',
        'bulbasaur',
        'squirtle'
    ]

    async function buscarPokemon() {

        const nombreIngresado = nombre.toLowerCase().trim()

        if (!listaPokemon.includes(nombreIngresado)) {

            setPokemon(null)

            Alert.alert('Pokémon no encontrado',)

            return
        }

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreIngresado}`)
        const json = await resp.json()
        setPokemon(json)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Pokédex
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Ingresa un Pokémon"
                value={nombre}
                onChangeText={(texto) => setNombre(texto)}
            />

            <Button
                title="Buscar"
                onPress={buscarPokemon}
            />

            {pokemon !== null && (
                <TarjetaPokemon datos={pokemon} />
            )}

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10
    },

    titulo: {
        fontSize: 25,
        textAlign: 'center',
        margin: 15
    },

    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }

})