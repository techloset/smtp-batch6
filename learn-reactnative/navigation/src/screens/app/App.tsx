import { Text, View, StyleSheet, Platform, ScrollView, TextInput, Alert, TouchableOpacity, ActivityIndicator, FlatList, Image } from "react-native"
import Home from "./src/screens/home/Home"
import { useState, useEffect } from "react";
import Card from "./src/components/card/Card";
import CardIOS from "./src/components/cardIos/CardIos";

import Apple from "./src/assets/apple.jpg"
const App = () => {
  console.log("Platform.OS", Platform.OS);
  const [userName, setUserName] = useState("")
  const [todos, setTodos] = useState([])
  const [loader, setLoader] = useState(false)
  const inputHandler = (text) => {
    setUserName(text)
  }

  const fetchTodos = async () => {
    try {
      setLoader(true)
      const data = await fetch('https://dummyjson.com/todos')
      const result = await data.json();
      console.log(result.todos)
      setLoader(false)
      setTodos(result.todos)


    } catch (error) {
      Alert.alert(error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const CardComponent = Platform.OS === "ios" ? CardIOS : Card


  return (
    <View style={{ backgroundColor: 'gray' }}>
  
      <TextInput
        onChangeText={inputHandler}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          backgroundColor: 'white',
          marginTop: 20
        }}
        defaultValue="You can type in me"
       />                  
       
       <Image style={{width:100, height:100}} source={require("./src/assets/apple.jpg")} />

      <Image style={{width:100, height:100}} source={Apple} />

      <Image style={{width:100, height:100}} source={{uri:'https://reactjs.org/logo-og.png'}} />
    

      <CardComponent />
<FlatList data={todos} renderItem={({ item }) => {
            return (<View>
              <Text>id: {item.id}</Text>
              <Text>id: {item.todo}</Text>
            </View>)
          }} />
         
      {/* <View>
        {loader ? <ActivityIndicator color={'white'} size={"large"} /> :
          
    

      </View> */}

      <TouchableOpacity onPress={fetchTodos} style={{ backgroundColor: 'green', width: 100, padding: 10 }}>
        <Text>Fetch Todos</Text>
      </TouchableOpacity>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>{userName}</Text>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>

      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
      <Text style={Platform.OS == "ios" ? style.header : style.headerAndroid}>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>


      <Home title="A react native course" />
    </View>
  )
}

export default App

const style = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    fontSize: 50,
    // marginTop: Platform.OS == "ios" ? 20 : 0
     ...Platform.select({
      ios:{
        marginTop:20
      },
      android:{
        marginTop:5
      }
     })
  },
  headerAndroid: {
    backgroundColor: 'blue',
  },
  footer: {
    margin: 20
  }
})