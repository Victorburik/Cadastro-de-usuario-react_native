import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import { Button,Icon} from 'react-native-elements';
import { UsersProvider } from './views/src/context';


export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
  <UsersProvider>  
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="UserList"
        screenOptions={screenOptions}>   

        <Stack.Screen 
        name="UserList" 
        component={UserList} 
        options={({navigation}) =>{
          return {
            title: "Lista de Usuarios",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("UserForm")}
                type="clear"
                icon={<Icon name="add" size={25} color="#FFFFFF" />}
              />
            )
          }
        }}
        />
        <Stack.Screen 
        name="UserForm" 
        component={UserForm} 
        options={{
          title: "Cadastro de Usuarios"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </UsersProvider>
  );
}

const screenOptions = {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "bold"
    }
}