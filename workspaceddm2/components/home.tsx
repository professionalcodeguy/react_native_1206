import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import Sobre from './sobre';
import { LinearGradient } from 'expo-linear-gradient';


export default function App(){
    const [page, setPage] = React.useState('home');
    const renderPage = () =>  {
        if(page === 'home'){
            return(
                <LinearGradient
                    colors={['#91DB94', '#C3C3E7', '#F4F4F4']}
                    style={styles.gradient}
                >

                <View style={styles.container}>    
                    <Text style={styles.title}>Página Inicial</Text>
                    <Text style={styles.title}>Exemplo 1</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Clique Aqui!</Text>
                    </TouchableOpacity>
                </View>
                </LinearGradient>

            );
        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };
    return <View style={styles.container}>{renderPage()}</View>;
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        color: '#000',
        fontFamily: 'Montserrat-Regular',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 700,
        letterSpacing: -1.6,
    },

    button:{
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});