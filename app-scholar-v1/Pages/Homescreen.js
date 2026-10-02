import React from 'react';
import {
View,
Text,
Button,
StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>
App Scholar
</Text>
<Button
title="Ir para Sobre"
onPress={() => navigation.navigate('Sobre')}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 20,
},
title: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
},
});