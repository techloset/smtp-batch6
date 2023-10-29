import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{backgroundColor:'gray', flex:1}}>
        
        <View style={{backgroundColor:'red', flex:1, flexDirection:'row'}}>
           
           <View  style={{backgroundColor:'yellow', flex:1}} >
 
           </View>

           <View  style={{backgroundColor:'orange', flex:1}} >
 
          </View>

        </View>
       
       <View style={{backgroundColor:'green', flex:1}} >
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste error hic commodi unde explicabo maxime, odit facere minima! Sapiente iure veniam omnis libero nam sunt tempora corrupti illo odit.</Text>
       </View>

       <View style={{backgroundColor:'blue', flex:1}}></View>
    </View>
  )
}