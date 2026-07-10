import {StyleSheet, Text, View, FlatList, TextInput, Button, Alert
} from 'react-native'
import React, { useEffect, useState } from 'react'
import TarjetaPokemon from '../components/TarjetaPokemon'

export default function PokemonScreen() {

    const [nombre, setNombre] = useState('')
    const [pokemonBuscado, setPokemonBuscado] = useState('')

    function buscarPokemon() {

        const pokemon = nombre.toLowerCase().trim()

        if (['pikachu', 'charmander'].includes(pokemon)) {
            setPokemonBuscado(pokemon)
        } else {
            setPokemonBuscado('')
            Alert.alert(
                'Pokémon no encontrado',
                'Busca pikachu o charmander'
            )
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Pokedex
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Ingresa Pokémon"
                value={nombre}
                onChangeText={(texto) => setNombre(texto)}
            />

            <Button
                title="Buscar"
                onPress={buscarPokemon}
            />

            <FlatList
                data={['pikachu', 'charmander'].filter(
                    (item) => item === pokemonBuscado
                )}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TarjetaPokemon nombre={item} />
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        paddingTop: 70
    },

    titulo: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }

})