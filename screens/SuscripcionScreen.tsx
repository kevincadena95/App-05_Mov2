import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native'
import React, { useState } from 'react'

/* CREAR UN FORMULARIO QUE RECIBA NOMBRE Y EDAD Y switch: SI TIENE HIJOS
-Si se activa aparece un campo que pedira la cantidad de hijos

SI ES MENOR DE 20 AÑOS, LA SUSCRIPCION CUESTA LA MITAD

SI TIENE HIJOS
SE APLICA UN DESCUENTO DE 7 DOLARES POR CADA HIJO

VALOR DE SUSCRIPCION DEL SEGURO ES DE 70 DOLARES
CALCULAR EL VALOR DEL SEGURO
*/


export default function SuscripcionScreen() {


  const [ocultar, setOcultar] = useState(false)

  const [nombre, setnombre] = useState("")
  const [edad, setedad] = useState(0)
  const [hijos, setHijos] = useState(0)


  const [suscripcionF, setSuscripcionF] = useState(0)


  function calcular() {
    let suscripcion = 70;

    if (edad < 20) {
      suscripcion = suscripcion/ 2;
    }

    if (hijos > 0) {
      suscripcion = suscripcion - (hijos * 7);
    }

    if (suscripcion < 0) {
      suscripcion = 0;
    }

    setSuscripcionF(suscripcion);
  }

  return (
    <View style={styles.container}>

      <Text>Ingrese su nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setnombre}
        value={nombre}
      />

      <Text>Ingrese su edad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(texto) => setedad(+texto)}
        value={edad.toString()}
      />



      <View>
        <Text> Cuantos hijos tiene? </Text>
        <Switch
          value={ocultar}
          onChange={() => setOcultar(!ocultar)}
        />
      </View>

      {
        ocultar == true
          ? <TextInput
            placeholder='Cantidad de hijos'
            style={styles.input}
            onChangeText={(texto) => setHijos(+texto)}
            value={hijos.toString()}

          />

          : <Text>Sin hijos</Text>
      }

      <Button
        title='calcular'
        onPress={calcular}
        color={"green"}
      />


      <Text style={styles.resultado}>
        El pago final de la suscripcion es: ${suscripcionF.toFixed(2)}
      </Text>



    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#a09e9e",
    fontSize: 25,
    width: "80%",
    margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#80f0a2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  }
})