import Navigation from './src/navigation/Navigation'

export default function App() {
  return <Navigation/>
}


// import React, {useState} from 'react';
// import {View, Switch, StyleSheet} from 'react-native';

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{false: '#767577', true: '#81b0ff'}}
//         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

// import { View,SectionList,StyleSheet,StatusBar,RefreshControl,Modal,KeyboardAvoidingView, Text,ActivityIndicator,Button, Alert, ImageBackground, TouchableOpacity } from 'react-native'
// import {useState} from "react"


// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];



// export default function App() {
//   const [visiblity, setVisiblity] = useState(false)
//   return (
//     <View style={{ alignItems:'center', flex:1, justifyContent:'center'}}>
        

//         <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({item}) => (
//         <View style={styles.item}>
//           <Text style={styles.title}>{item}</Text>
//         </View>
//       )}
//       renderSectionHeader={({section: {title}}) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />
       
//        {/* <RefreshControl refreshing={true} onRefresh={()=>Alert.alert("pull down refresh")} /> */}


//        {/* <Modal
//       //  presentationStyle={'formSheet'}
//         animationType="slide"
//         // transparent={true}
//         visible={visiblity}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
          
//         }}>

//           <View style={{backgroundColor:'red', flex:1, alignItems:'center', justifyContent:'center'}}>
//             <TouchableOpacity onPress={()=> setVisiblity(!visiblity)}>

//             <Text>Modal Inside</Text>
//             </TouchableOpacity>
           
//           </View>

//           </Modal>
//         */}
        
       
       
       
       
//         {/* <ImageBackground source={require('./src/assets/apple.jpg')} resizeMode="cover" >
// <Button
//   onPress={()=>Alert.alert("Button click")}
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// /> */}
//         {/* </ImageBackground> */}
//        {/* <ActivityIndicator size="large" color="#00ff00" /> */}

//        <Button
//   onPress={()=>setVisiblity(!visiblity)}
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
//     </View>
//   )

// }

// // export default function App() {
// //   return (
// //     <View style={{backgroundColor:'gray', flex:1}}>
        
// //         <View style={{backgroundColor:'red', flex:1, flexDirection:'row'}}>
           
// //            <View  style={{backgroundColor:'yellow', flex:1}} >
 
// //            </View>

// //            <View  style={{backgroundColor:'orange', flex:1}} >
 
// //           </View>

// //         </View>
       
// //        <View style={{backgroundColor:'green', flex:1}} >
// //         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste error hic commodi unde explicabo maxime, odit facere minima! Sapiente iure veniam omnis libero nam sunt tempora corrupti illo odit.</Text>
// //        </View>

// //        <View style={{backgroundColor:'blue', flex:1}}></View>
// //     </View>
// //   )
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//   },
// });