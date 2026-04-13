import { View, Text, FlatList, row, } from 'react-native';
import React, {useState, useEffect} from 'react'

export default function App () {
    const [data, setDate] = useState([])
    const url = 'htt://localhost:3000/alunos';
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setDate(json))
        .catch((error) => console.error(error))
    })
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Lista de Alunos</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id }
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <text>{item.nome}</text>
                        <text>{item.media}</text>
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    constiner: {flex: 1, padding: 20},
    title: {fontSize: 20, fontWeight; 'bold', padding: 20},
    row; { flexdirection: 'row', paddingVertical: 10}
})