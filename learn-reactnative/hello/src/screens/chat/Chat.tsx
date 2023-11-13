import { View, Text, Button, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { db } from '../../config/firebase';

export default function Chat(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchTodos()
  }, [])

  const deleteTodo =async (id)=>{
    try {
      await db.collection('todos').doc(id).delete()
      fetchTodos()

    } catch (error) {
      
    }
  }

  const fetchTodos =async ()=>{
    try {
      const todos = await db.collection('todos').get();
      const todoResult = []
      todos.forEach((todo)=>{
        console.log("todo",todo.data());
        todoResult.push({
          id: todo.id,
          ...todo.data()
        })
      })

      console.log("todos",todos);
      setData(todoResult)
      
    } catch (error) {
      console.log("fetchTodos error", error);
      
    }

  }
  
  return (
    <View>
      <Text>Chat</Text>
      {
        data?.map((todo)=>{
          return (
            <View style={{flexDirection:'row'}}>
              <Text> {todo.id}- {todo.title} </Text>
              <TouchableOpacity onPress={()=>deleteTodo(todo.id)}>
                <Text style={{backgroundColor:'red'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      <Button onPress={()=> props.navigation.navigate('AddTodos')} title="Add todos"/>
    </View>
  )
}