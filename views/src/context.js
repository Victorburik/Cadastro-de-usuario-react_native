import React, { createContext, useReducer } from "react";
import users from "../data/users";

const initialState = {users}
const UserContext = createContext({})

const actions = {
    //acrecentando um novo usuario
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return{
            ...state,
            users: [...state.users, user]
        }
    },

    //deleta o user selecionado
    deletUser(state , action){
        const user = action.payload
        return{
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    },

    //verifica se possui o id, caso sim ele atualiza os dados 
    updateUser(state, action){
        const updated = action.payload
        return{
            ...state,
            users: state.users.map(u => u.id === updated.id ? updated : u)
        }
    }
}


export const UsersProvider = props => {
    //retorna sempre o estado evoluido
    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }
    
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>   
    )
}

export default UserContext