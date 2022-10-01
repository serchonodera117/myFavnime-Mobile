import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  ScrollView,
  Image, 
  Text, 
  View,
  TouchableOpacity,
   TextInput, 
   requireNativeComponent} from 'react-native';

console.log('hola')
export default function App() {
  return (
    <View style={styles.MainContainer}>
     <Image style={styles.logo} source={require('./images/background-login.png')}/>
    <View style={styles.container}>
      <Text style={styles.titulo}>myFavnime</Text>
      <Text style={styles.subtitulo}>Acceder </Text>
      <TextInput style={styles.cajatexto}  placeholder="Nombre de usuario"></TextInput>
      <TextInput style={styles.cajatexto} placeholder="Contraseña" type="number"></TextInput>
      <TouchableOpacity style={styles.entrar}>
              <Text style={{color:'white'}}>iniciar sesión</Text>
      </TouchableOpacity>
    </View>
     <View style={styles.pierow}>
       <Text style={{color:'grey'}}>¿No estás registrado?</Text>
        <TouchableOpacity>
          <Text style={{color:'red', marginLeft: 5}}>click aqui</Text>
          </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer:{
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  container: {
    marginTop:'5%',
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titulo:{
    fontSize:60,
    color:'#34434d',
    fontWeight: 'bold',
  },
  subtitulo:{
    fontSize: 20,
    color: 'green',

  },
  cajatexto:{
    backgroundColor: 'white',
    height: 40,
    width: '50%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    paddingStart: 20,
  },
  entrar:{ 
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#3625C2',
    padding: 15,
  },
  logo:{
    width: '100%',
    height: '35%',
    zIndex: 5,
  },
  pierow:{
    flexDirection: 'row',
    marginBottom: '5%',
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});