import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StatusBar, Keyboard } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import Repository from '../../components/repository/Repository'
import api from '../../services/api'
import getRealm from '../../services/Realm'

const { container, inputContainer, button, text, input } = styles;

export default function Main() {
  const [inputs, setInput] = useState('')
  const [err, setErr] = useState(false)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();
      const data = realm.objects('Repository').sorted('stars', true)
      setRepositories(data)
    };

    loadRepositories()
  }, []);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count
    }

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data)
    })
  }

  async function handleAddRepository() {
    try {
      Keyboard.dismiss();
      const response = await api.get(`/repos/${inputs}`)
      await saveRepository(response.data)
      setInput("");
      setErr(false)
    } catch (err) {
      console.log(err)
      setErr(true)
    }
  }

  return (
    <LinearGradient colors={['#180c63', '#8470ff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={container}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Text style={text}>Repositórios</Text>
      <View style={inputContainer}>
        <TextInput value={inputs} onChangeText={text => setInput(text)} placeholder='Procurar repositório...' style={err ? [input, { borderWidth: 2, borderColor: '#FF7272' }] : input} />
        <TouchableOpacity onPress={handleAddRepository} style={button}>
          <Icon name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow:1 }}
        renderItem={({ item }) => {
          return (
            <Repository data={item} />
          )
        }}
      />
    </LinearGradient>
  );
}
