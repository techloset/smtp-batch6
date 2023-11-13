import { View, Text, Button } from 'react-native'
import {useState} from "react";
import Header from "../../components/header/Header";
export default function Home(props) {
       const [count, setCount ] = useState(0)
       const doIncrement = ()=>{
        setCount(count + 1)
       }
       const doDecrement = ()=>{
        setCount(count - 1)
       }
  return (
    <View>
      <Header count={count} />
      <Text style={{backgroundColor:'white', fontSize:30}}>{props.title}</Text>
      <Button  onPress={doIncrement} title="Add+" />
      <Button  onPress={()=> doDecrement(0)} title="Dec -" />


      <Button  onPress={()=> props.navigation.navigate('Signup')} title="Go to Chat" />
    </View>
  )
}