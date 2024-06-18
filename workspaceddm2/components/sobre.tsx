import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import Home from './home';

export default function App(){
    const [page, setPage] = React.useState('sobre');
    const renderPage = () => {
        if (page === 'sobre') {
            return(
                <View style={styles.container}>
                <img src='../assets/images/icone2.png' style={styles.imagem}></img>
                <Text style={styles.title}>Localização Atual</Text>

                <Text style={styles.latitudeStyle}>Latitude: 0,00</Text>
                <Text style={styles.longitudeStyle}>Longitude: 0,00</Text>
                <TouchableOpacity style={styles.button1} onPress={() => setPage('')}>
                    <Text style={styles.text}>Obter Localização</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                </View>
            );
        } else if (page === 'home') {
            return <Home />;
        }
    };
    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({

    button1:{
        width: 350,
        height: 60,
        padding: 10,
        borderRadius: 8,
        border: '2px solid #000',
        backgroundColor: '#FFF',
        marginTop: 60,
        flexShrink: 0,
    },

    text: {
        height: 34,   
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        flexShrink: 0,
        backgroundColor: '#fff',   
        textAlign: 'center',
        alignContent: 'center',     
    },

    div:{
        justifyContent: "flex-start",
    },

    longitudeStyle:{
        display: 'flex',
        width: 350,
        height: 28,
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#000',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        marginLeft: 40,
        marginRight: 40,
    },

    latitudeStyle:{
        display: 'flex',
        width: 350,
        height: 28,
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#000',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
    },

    imagem:{
        height: 310,
        width: 310,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 168,
        flexShrink: 0,
    },

    container:{
        backgroundColor: '#fff',
        width: 430,
        height: 932,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 40, 
        width: 350,
        color: '#000',
        fontFamily: 'Arial',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 700,
        letterSpacing: -1.6,  
    },

    button:{
        display: 'flex',
        width: 350,
        height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        marginBottom: 60,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
    },
});