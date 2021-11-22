import React from "react";
import { View , TextInput, StyleSheet} from "react-native";
import { Text } from "react-native-elements"; 
import { Button } from "react-native-elements";
const VerifyOTP = () => {
    return(
     <View>
         <View style={styles.otpBgwrapper}>
             <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}> Verify your OTP</Text> 
         </View>
         <View style={styles.otpVerifyContainer}>
             <View style={styles.otpBox}>
                <TextInput 
                    keyboardType="number-pad"
                    maxLength={1} 
                    style={styles.inputText}/>
                <TextInput 
                    keyboardType="number-pad"
                    maxLength={1}
                    style={styles.inputText}/>
                <TextInput 
                    keyboardType="number-pad"
                    maxLength={1}
                    style={styles.inputText}/>
                <TextInput 
                    keyboardType="number-pad"
                    maxLength={1}
                    style={styles.inputText}/>
             </View>
             <Text style={{paddingHorizontal: 80, color: '#999', fontSize: 12, marginTop: 12, justifyContent: 'center'}}>
                 OTP has been sent to 
                 <Text style={{fontWeight: 'bold'}}>  9971118894</Text>
            </Text>
             <View style={{marginTop: 3, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 80, justifyContent: 'center', marginBottom: 16}}>
                 <Text style={{color: '#999', fontSize: 12}}>Haven't recived your OTP yet</Text>
                 <Button
                    title="Resend"
                    type="clear"
                    buttonStyle={{width: 100}}
                />
             </View>
             <Button title="Continue"  buttonStyle={{marginHorizontal: 40, padding: 16,borderRadius: 8}}/>
         </View>
     </View>
    )
}

const styles = StyleSheet.create({
    otpBgwrapper: {
        height: 300,
        backgroundColor: 'red',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    otpVerifyContainer: {
        marginTop: 50,
        justifyContent: 'center'
    },
    otpBox: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 80,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        padding: 12
    }
})

export default VerifyOTP;