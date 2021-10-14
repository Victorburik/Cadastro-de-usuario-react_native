import React, { useContext, useState } from 'react';
import {Text, TextInput, View,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import UserContext from './src/context';

//Função para pegar os valores já declarados na lista e permitir que possa alterar os dados dos mesmos.
export default ({route, navigation}) => {
    const [user, setuser] = useState(route.params ? route.params: {} )
    const { state, dispatch } = useContext(UserContext)
    return(
        <View style={style.form}>
            <Text>
               Nome: 
            </Text>
            <TextInput
                style={style.input}
                onChangeText={name => setuser({...user, name})}
                placeholder="Digite o nome do usuario"
                value={user.name}
            />
            <Text>
               E-mail: 
            </Text>
            <TextInput
                style={style.input}
                onChangeText={email => setuser({...user, email})}
                placeholder="Digite o e-mail do usuario"
                value={user.email}
            />

            <Text>
               Imagem de perfil:
            </Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setuser({...user, avatarUrl})}
                placeholder="Digite a URL do avatar (icone de perfil)"
                value={user.avatarUrl}
            />

            <Text>
               Descrição:
            </Text>
            <TextInput
                style={style.input}
                onChangeText={desc => setuser({...user, desc})}
                placeholder="Digite a descrição do perfil"
                value={user.desc}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style =  StyleSheet.create({
    form:{
        padding:12
    },
    input:{
         height: 40,
         borderColor:'gray',
         borderWidth: 1,
         marginBottom: 10,
     }
})