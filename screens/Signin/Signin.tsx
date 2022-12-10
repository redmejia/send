import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, Text,  SafeAreaView,  KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
function Signin() {
    const navigate = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../public/sendlog.png')}
            />
            <KeyboardAvoidingView behavior="padding">

                <TextInput
                    placeholderTextColor="#16F06D"
                    style={styles.inputStyle}
                    placeholder="Email"
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.inputStyle}
                />
                 <TouchableOpacity
                    style={styles.signinBtn}
                >   
                    <Text style={styles.signinTitle}>Signin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={()=>navigate.navigate('register' as never, {} as never)}
                >
                    <Text style={{color : 'white'}}>I don't have an account.! Register</Text>
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