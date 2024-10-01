import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Apresentacao from "./src/pages/Apresentacao";
import Biscoito from "./src/pages/Biscoito";
import Login from "./src/pages/Login";
import Sobre from "./src/pages/Sobre";
import Home from "./src/pages/Home";
import FormBiscoito from "./src/pages/FormBiscoito";

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormBiscoito">
        
        <Stack.Screen name="Apresentacao" component={Apresentacao} 
        options={
          {
            header: () => <></>
          }
        }/>
        <Stack.Screen name="Biscoito" component={Biscoito} options={
          {
            headerStyle: {backgroundColor: '#f7e4b3'}
          }
        } />
        <Stack.Screen name="Login" component={Login} options={
          {
            headerStyle: {backgroundColor: '#f7e4b3'}
          }
        }
        />
        <Stack.Screen name="Sobre" component={Sobre} options={
          {
            headerStyle: {backgroundColor: '#f7e4b3'}
          }
        } 
        />
        <Stack.Screen name="Home" component={Home} options={
          {
            headerStyle: {backgroundColor: '#f7e4b3'}
          }
        } 
        />
      <Stack.Screen name="FormBiscoito" component={FormBiscoito} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}