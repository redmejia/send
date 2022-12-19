import { StyleSheet, TextInput, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newRegister } from "../../redux/auth/auth";
function Register() {
    const navigate = useNavigation()
    const dispatch: any = useDispatch()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pwd, setPassword] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [cvNumber, setCvNumber] = useState("")


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
                    onChangeText={(fullName) => setFullName(fullName)}
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    style={styles.inputStyle}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Phone"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    onChangeText={(phone) => setPhone(phone)}
                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    onChangeText={(pwd) => setPassword(pwd)}
                />
                <Text style={styles.bankText}>Bank Information</Text>
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Card number"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    onChangeText={(cardNumber) => setCardNumber(cardNumber)}

                />
                <TextInput
                    placeholderTextColor="#16F06D"
                    placeholder="Cv number"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    onChangeText={(cvNumber) => setCvNumber(cvNumber)}
                />
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={() => {
                        const payload = {
                            full_name: fullName,
                            email: email,
                            phone: phone,
                            pwd: pwd,
                            bank: {
                                full_name: fullName,
                                card: cardNumber,
                                cv_number: cvNumber
                            }
                        }

                        dispatch(newRegister(payload))
                        navigate.navigate('Send' as never, {} as never)
                    }}
                >
                    <Text style={styles.registerTitle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signinBtn}
                    onPress={() => navigate.navigate('signin' as never, {} as never)}
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