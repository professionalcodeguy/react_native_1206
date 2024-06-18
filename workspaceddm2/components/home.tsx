import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
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
                    <View style={styles.div}>
                    <Text style={styles.title}>Vários lugares, um aplicativo</Text>
                    </View>
                    <br></br>
                    <Text style={styles.subtitulo}>Encontre-se em um instante com nosso aplicativo de localização instantânea.</Text>
                    <img src='../assets/images/icone1.png' style={styles.imagem}></img>
                    
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Minha Localização</Text>
                    </TouchableOpacity >
                    
                    
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

    div:{
        justifyContent: "flex-start",
    },

    subtitulo:{
        display: 'flex',
        width: 350,
        height: 86,
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#000',
        textAlign: 'justify',
        fontSize: 24,       
        fontWeight: 400,
    },

    imagem:{
        height: 296,
        width: 296,
        marginBottom: 76,
        marginTop: 76,
        flexShrink: 0,
    },

    container:{
        width: 430,
        height: 932,
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
        marginTop: 120,
        width: 360,
        color: '#000',
        fontFamily: 'Arial',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 700,
        letterSpacing: -1.6,
        marginBottom: 20,
        
    },

    button:{
        width: 350,
        height: 60,
        padding: 10,
        borderRadius: 8,
        border: '2px solid #000',
        backgroundColor: '#FFF',
        marginBottom: 120,
        flexShrink: 0,
    },

    buttonText: {
        height: 34,   
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        flexShrink: 0,
        backgroundColor: '#fff',   
        textAlign: 'center',
        alignContent: 'center',
        
    },
});