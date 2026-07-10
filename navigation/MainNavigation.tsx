import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UsuarioScreen from '../screens/UsuarioScreen';
import SuscripcionScreen from '../screens/SuscripcionScreen';
import Pokemonscreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//STACK
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
    );
}

//DRAWER
function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="UsuarioScreen" component={UsuarioScreen} />
            <Drawer.Screen name="SuscripcionScreen" component={SuscripcionScreen} />
            <Drawer.Screen name="Pokemonscreen" component={Pokemonscreen} />
        </Drawer.Navigator>
    );
}

export function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}