import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function HomeScreen() {
  const [nome, setNome] = useState<string>('');
  const [humor, setHumor] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const gerarMensagem = () => {
    if (!nome || !humor) {
      setMensagem("Preencha os campos para continuar! 😊");
      return;
    }

    setMensagem(`Olá, ${nome}! Vejo que você está se sentindo ${humor} hoje. Obrigado por compartilhar! 🌟`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MoodWriter 😄</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Como você está se sentindo?"
        value={humor}
        onChangeText={setHumor}
      />

      <TouchableOpacity style={styles.botao} onPress={gerarMensagem}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>

      {mensagem.length > 0 && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f5f9',
  },
  titulo: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    color: '#334155',
    textAlign: 'center',
  },
});
