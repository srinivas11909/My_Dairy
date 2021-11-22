import React from "react";
import { View , Text, StyleSheet} from "react-native";
import { Button } from "react-native-elements";


const HomePage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Hi This is sample HomePage</Text>
            <Button title="click on me" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      background: '#cccc',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8fcbbc'
    }
})

export default HomePage;
