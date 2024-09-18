import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.centralizar}>
      <Image style= {styles.logo} source={require('../assets/images/nubank-logo-branco.png')}></Image> 
      </View>
      <View style= {styles.comum}>  
         
      <Text style= {styles.text}>Olá, Felipe Melo</Text>
           
        <TextInput style={styles.procurar} placeholder='Procurar...' placeholderTextColor={'#FFF'}>  </TextInput>
      
        <View style={styles.box1}>
            <Text style={styles.titulo}>Cartão de crédito</Text>
            <Text>Fatura</Text>
            <Text style={styles.valorCartao}>R$ 1.500,00</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.nomeBtn}>Pagar fatura</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box2}>
            <Text style={styles.titulo}>Conta</Text>
            <Text>Saldo disponivel</Text>
            <Text style={styles.valorConta}>R$ 300,00</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.nomeBtn}>Transferir</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnCartao}>
            <Text style={styles.btnMeusCartoes}>Meus cartões</Text>
        </TouchableOpacity>


      </View>


      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:'#8B03BB',
  flex: 1,
  paddingTop: 30

  },

  centralizar:{
    alignItems: 'center'
    
    
  },

  logo:{
    width: 120,
    height: 50,
   
  },

  comum: {
    padding:30
  },

  text: {
    color: '#FFF',
    marginBottom: 15,
    fontSize: 18

  },

  
  procurar:{
    marginBottom: 30,
    borderRadius: 15,
    height: 50,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: '#fff',
    color: '#FFF'    
  },
  box1: {
    backgroundColor: '#FFF',
    marginBottom: 30,
    padding: 15,
    borderRadius: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },

  valorCartao:{
    color: '#0099CC',
    fontSize: 33,
    fontWeight: 'bold',
    marginTop:10 ,
    marginBottom: 10,
  },
  botao: {
    borderRadius: 20,
    padding: 3,
    width: 150,
    alignItems: 'center',
    borderWidth: 2,
    borderColor:  '#8b03bb'
  },
  nomeBtn: {
    color: '#8b03bb',
    fontSize: 18
  },
  box2: {
    backgroundColor: '#FFF',
    marginBottom: 30,
    padding: 15,
    borderRadius: 15,
  },

  valorConta: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10
  },


  btnMeusCartoes: {
    color: '#fff' ,
    fontSize: 20,
    fontWeight: 'bold'
  },

  btnCartao: {
    backgroundColor: '#0099cc',
    borderRadius: 30,
    alignItems: 'center',
    padding: 15
  },


  })







