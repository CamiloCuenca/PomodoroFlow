import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { themeContext } from '../themesContext';
import { AuthContext } from './AuthContext';

export default function LoginScreen({ navigation }) {
    const { theme } = useContext(themeContext);
    const { login } = useContext(AuthContext); // Obtener la función de login
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simulación de autenticación
        const userData = { name };
        login(userData); // Guardar usuario en contexto
        
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.secondary }]}>
            <TextInput 
                style={[styles.input, { backgroundColor: theme.tertiary, color: theme.foreground }]} 
                placeholder="Nombre"
                placeholderTextColor={theme.foreground}
                value={name}
                onChangeText={setName}
            />

            <TextInput 
                style={[styles.input, { backgroundColor: theme.tertiary, color: theme.foreground }]} 
                placeholder="Contraseña"
                placeholderTextColor={theme.foreground}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Pressable 
                style={[styles.button, { backgroundColor: theme.primary }]} 
                onPress={handleLogin}  
            >
                <Text style={[styles.buttonText, { color: theme.foreground }]}>Iniciar sesión</Text>
            </Pressable>

            <Pressable 
                style={[styles.button, { backgroundColor: theme.tertiary }]} 
                onPress={() => navigation.navigate("Signup")}  
            >
                <Text style={[styles.buttonText, { color: theme.primary }]}>Crear cuenta</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        fontWeight: 'bold',
        borderRadius: 12,
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
