import React, { useContext } from 'react';
import {Alert, FlatList, View} from 'react-native';
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
import UserContext from './src/context';

export default props => {
    

    const {state, dispatch} = useContext(UserContext)
    //Função para gerar um alerta na tela do user, caso deseja excluir a função deleta o mesmo se não apenas fecha o alerta
    
    function delet(item){
        Alert.alert('Deletar usuario', 'Deseja deletar o usuario em questão?',[
           {
               text:'Sim',
               onPress(){
                dispatch({
                    type:'deletUser',
                    payload: item,
                })
               }
           },
           {
               text:'Não'
           }
        ])
    }
    //Função para mostrar o nome do usuario,email e seu icone, listitem para trazer uma melhor renderização pro app
    function getUserItem({ item }) {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', item)}
            >
                <Avatar
                    title={item.name}
                    source={{ uri: item.avatarUrl}}
                />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    name="edit"
                    size={25}
                    color="orange"
                    onPress={() => props.navigation.navigate('UserForm', item)}
                />
                <ListItem.Chevron
                    name="delete"
                    size={25}
                    color="red"
                    onPress={() => delet(item)}
                />
            </ListItem>
            
        )   
    }

    return(
        <View>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={state.users}    
                renderItem={getUserItem}
            > 
            </FlatList>
        </View>
    )
}