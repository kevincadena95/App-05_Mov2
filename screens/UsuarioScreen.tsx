import { StyleSheet, Text, View, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

/* TRAER LOS DATOS DESE LA API PAR VER LOS DATOS DE  MAS IMPORTANTES Y IMAGEN ES OBLIGATORIA
(Opcional los componetes funcioanles) */

export default function UsuarioScreen() {
    const [usuarios, setUsuarios] = useState<usuario[]>([])

    useEffect(() => {
        cargarDatos()
    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://randomuser.me/api/?results=25')
        const json = await resp.json()
        setUsuarios(json.results)
    }

    type usuario = {
        

        name: {
            first: string
            last: string
        }

        picture: {
            large: string
        }

        gender: string
        email: string
    }

    return (
        <View>
            <Text>Lista de Usurios</Text>

            <FlatList
                data={usuarios}
                //puse este key porque me daba un error al copilar
                keyExtractor={(item) => item.email}
                renderItem={({ item }: {item: usuario}) => (
                    <View>
                        <Text>Nombre Compelto: {item.name.first} {item.name.last}</Text>
                        <Text>Genero: {item.gender}</Text>
                        <Text>Correo: {item.email}</Text>
                        <Image style={styles.imagen} source={{uri:item.picture.large}}></Image>
                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    imagen:{
        width:60,
        height:60,
        margin:15
    }
})