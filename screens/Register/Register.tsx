import { StyleSheet, TextInput, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Register() {
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
                    placeholder="Full name"
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    style={styles.inputStyle}
                    placeholder="Email"
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Phone"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.inputStyle}
                />
                <Text style={styles.bankText}>Bank Information</Text>
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Full name"
                    style={styles.inputStyle}

                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Card number"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Cv number"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.registerBtn}
                >
                    <Text style={styles.registerTitle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signinBtn}
                    onPress={() => navigate.navigate('signin' as never,{} as never)}
                >
                    <Text style={{ color: 'white' }}>I have an account.! Signin</Text>
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
    bankText: {
        marginTop: 20,
        color: 'white',
        fontWeight: '900',

    },
    registerBtn: {
        marginTop: 20,
        backgroundColor: "#16F06D",
        width: 300,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    registerTitle: {
        color: "#111010",
        fontWeight: '900'
    },
    signinBtn: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

})
export default Register;