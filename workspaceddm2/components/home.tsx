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
                    <Text style={styles.title}>Vários lugares, um</Text>
                    </View>
                    <Text style={styles.title}>aplicativo</Text>
                    <br></br>
                    <Text style={styles.subtitle}>Encontre-se em um instante com nosso aplicativo de localização instantânea.</Text>
                    <img src='../assets/images/icone1.png' style={styles.imagem}></img>
                    
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Clique Aqui!</Text>
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

    imagem:{
    height: 296,
    width: 296,
    marginBottom: 76,
},

    subtitle:{
        fontSize: 24,
        fontFamily: 'Montserrat',
        marginBottom: 76,
    },

    container:{
        padding: 40,
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
        marginBottom: 20,
    },

    button:{
        backgroundColor: '#007BFF',
        padding: 10,
        
    },

    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        width: 350,
        height: 60,
        flexShrink: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
    },
});