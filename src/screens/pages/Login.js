import React from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import { Button} from "react-native-elements";

const LoginPage = (props) => { 
    return(
        <View style={{
            height: '100%',
            backgroundColor: '#418cbf',
        }}>
        <View style={styles.loginHeader}>
            <Text style={styles.title}>Milk way {props.title}</Text>
        </View>
        <View style={styles.otpBox}>
            
            <View>
                <Text style={{fontSize: 22, color: 'white', fontWeight: '500' ,marginBottom: 16}}>Get Started</Text>
            </View>
            <View>
                <View style={styles.otpContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                    placeholder="Your Phone Number"
                    placeholderTextColor={'grey'}
                    selectionColor={'grey'}
                    keyboardType="number-pad"
                    style={styles.inputText}
                    maxLength={10}
                    />
                </View>
                <View>
                    <Text style={{color: 'white', fontSize: 12, marginTop: 8, marginBottom: 8}}>We will send you OTP on this number</Text>
                    <Button title="OTP ON SMS" buttonStyle={{backgroundColor: '#4cabe5', borderRadius: 8, padding: 12}}/>
                </View>
            </View>
        </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    loginHeader:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4cabe5',
        padding: 10
    },
    title: {
        fontSize: 24,
        color: '#ffff'
    },
    otpBox: {
      position: 'absolute',
      bottom: 50,
      left: 16,
      right: 16
    },
    otpContainer: {
      backgroundColor: 'white',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: '#e6e6e6'
    },
    countryCode: {
      width: 35
    },
    inputText:{
      width: 190,
      borderLeftColor: '#ccc',
      borderLeftWidth: 1,
      paddingHorizontal: 12
    }
})


export default LoginPage;