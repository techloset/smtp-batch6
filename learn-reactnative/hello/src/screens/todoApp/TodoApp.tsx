import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { db } from '../../config/firebase'


export default function TodoApp() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addTodosHandler = async () => {
        console.log("addTodosHandler",addTodosHandler);
        try {
            const result = await db
            .collection('todos').add({
                title,
                description,
                createdAt: new Date(),
            })  
            console.log("result",result);
            
        } catch (error) {
            console.log("error", error);
        }
      
    }
    return (
        <View>
            <Text>TodoApp</Text>
            <TextInput placeholder='Enter Title' onChangeText={(text) => setTitle(text)} />
            <TextInput placeholder='Enter Description' onChangeText={(text) => setDescription(text)} />
            <Button title="Create New Todo" onPress={addTodosHandler} />
        </View>
    )
}