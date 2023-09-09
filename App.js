import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, } from 'react-native';
  
export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [vastaus, setVastaus] = useState('0');
  const [data, setData] = useState([]);

  const buttonPressedplus = () => {
    tulos = parseInt(numero1) + parseInt(numero2)
    setVastaus(parseInt(tulos))
    tekstina = numero1 + " + " + numero2 + " = " + parseInt(tulos)
    if(numero1 == '' || numero2 == ''){ 
      setVastaus(0)
    } else {
      setData([...data, { key: tekstina }]);
    }
    setNumero1('');
    setNumero2('');
    }
  const buttonPressedminus = () => {
    tulos = numero1 - numero2
    setVastaus(parseInt(tulos))
    tekstina = numero1 + " + " + numero2 + " = " + parseInt(tulos)
    if(numero1 == '' || numero2 == ''){
      setVastaus(0)
    } else {
      setData([...data, { key: tekstina }]);
    }
    setNumero1('');
    setNumero2('');
  }
  return (
    <View style={styles.container}>
      <Text>Result:{vastaus}</Text> 
      <StatusBar style="auto" />
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={numero1 => setNumero1(numero1)} value={numero1.toString()}/>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={numero2 => setNumero2(numero2)} value={numero2.toString()}/>
      <View style={styles.miniContainer}>
      <Button title='+' style={styles.button} onPress={() => buttonPressedplus()}>+</Button>
      <Button title='-' style={styles.button} onPress={() => buttonPressedminus()}>-</Button>
      </View>
      <View style={styles.container}>
      <Text>History</Text>
      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} keyExtractor={(item, index) => index.toString()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    padding: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniContainer: {
    width: 150,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    width: 150,
    color: 'blue',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
