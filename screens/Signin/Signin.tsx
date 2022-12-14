import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { newSignin } from "../../redux/auth/auth";

function Signin() {

    const navigate = useNavigation()
    const dispatch: any = useDispatch()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../public/sendlog.png')}
            />
            <KeyboardAvoidingView behavior="padding">

                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    placeholderTextColor="#16F06D"
                    style={styles.inputStyle}
                    placeholder="Email"
                />
                <TextInput
                    onChangeText={(pwd) => setPassword(pwd)}
                    placeholderTextColor="#16F06D"
                    placeholder="Password"
                    secureTextEntry={false}
                    style={styles.inputStyle}
                />
                <TouchableOpacity
                    style={styles.signinBtn}
                    onPress={() => {


                        const payload = { email: email, pwd: password }
                        dispatch(newSignin(payload))
                        navigate.navigate('Send' as never,{} as never)

                    }}

                >
                    <Text style={styles.signinTitle}>Signin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={() => navigate.navigate('register' as never, {} as never)}
                >
                    <Text style={{ color: 'white' }}>I don't have an account.! Register</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111010',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40
    },
    inputStyle: {
        color: '#16F06D',
        borderBottomWidth: 3,
        borderBottomColor: '#16F06D',
        paddingTop: 15,
        width: 300,
    },
    signinBtn: {
        marginTop: 20,
        backgroundColor: "#16F06D",
        width: 300,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    signinTitle: {
        color: "#111010",
        fontWeight: '900'
    },
    registerBtn: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

})


export default Signin;