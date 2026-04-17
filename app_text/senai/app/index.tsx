import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style = {styles.container}>
            <Image source={require('@/assets/senai.png')} style={styles.logo} />
                <Text style={styles.welcome}>Bem-vindo ao App SENAI!</Text>
                <Link href="/sobre" style = {styles.button}> Ir para Sobre </Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#ffff'
    },

    logo: {width: 150, 
        height: 150, 
        marginBottom: 20,
        resizeMode: 'contain'
    },

    welcome: {
        fontSize: 20,
        marginBottom: 20
    },

    button: {color: 'blue', 
        fontSize: 18, 
        fontWeight: 'bold' 
    }
});