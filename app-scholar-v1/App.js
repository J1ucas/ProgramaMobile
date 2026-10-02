import {
StyleSheet,
Text,
View,
Image,
TouchableOpacity,
Alert
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const exibirMensagem = () => {
Alert.alert(
"APP Scholar",
"Gabriel é gay"
);
};

export default function App() {
  return (
<View style={styles.container}>
<Text style={styles.titulo}>
APP Escola
</Text>
<Image source={require('/assets/logo.png')} style={styles.logo}/>
<Text style={styles.subtitulo}>
Aplicativo Escolar Mobile
</Text>
<TouchableOpacity style={styles.botao} onPress={exibirMensagem}>
<Text style={styles.textoBotao}>
Alunos
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.botao} onPress={exibirMensagem}>
<Text style={styles.textoBotao}>
Professores
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.botao} onPress={exibirMensagem}>
<Text style={styles.textoBotao}>
Coordenadores
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.botao} onPress={exibirMensagem}>
<Text style={styles.textoBotao}>
Configuração
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.botao} onPress={exibirMensagem}>
<Text style={styles.textoBotao}>
Sobre
</Text>
</TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F3F2',
    padding: 8,
  },
  logo:{
width:150,
height:150,
marginBottom:20
},
  titulo:{
fontSize:32,
fontWeight:'800',
color:'#1565C0'
},
  subtitulo:{
fontSize:20,
marginBottom:40,
color:'#1565C0'
},
  botao:{
width:'45%',
backgroundColor:'#E8E3E1',
padding:20,
borderRadius:13,
marginBottom:15,
alignItems:'center'
  },
});
