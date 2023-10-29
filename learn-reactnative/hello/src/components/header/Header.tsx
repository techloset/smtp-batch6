import { View, Text } from "react-native";

export default function Header(props) {
  return (
    <View>
        <Text style={{backgroundColor:'white', fontSize:30}}> Header : count {props.count} </Text>
    </View>
  )
}
