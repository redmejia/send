import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Send from "../Send/Send";
import { Image, View } from "react-native";
import Trasaction from "../Transaction/Transaction";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TxHome from "../TxHome/TxHome";
import Gift from "../Gift/Gift";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const TabBottom = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: () => {

                    if (route.name === "home") {
                        return (
                            <View
                                style={{
                                    marginTop: 20,
                                }}
                            >
                                <Image
                                    source={require('../public/hometx.png')}
                                />

                            </View>
                        )

                    }

                    if (route.name === "send2") {
                        return (
                            <View
                                style={{
                                    marginTop: 20,
                                }}
                            >
                                <Image
                                    source={require('../public/gift.png')}
                                />
                            </View>
                        )
                    }
                    if (route.name === "send-money") {
                        return (
                            <View
                                style={{
                                    marginTop: -10,
                                }}
                            >
                                <Image
                                    source={require('../public/sendcircle.png')}
                                />
                            </View>
                        )
                    }

                    if (route.name === "send") {
                        return (
                            <View
                                style={{
                                    marginTop: 20,
                                }}
                            >
                                <Image
                                    source={require('../public/coins.png')}
                                />
                            </View>
                        )
                    }

                },



                tabBarStyle: {
                    //  height: 100,
                    paddingHorizontal: 5,
                    paddingTop: 10,
                    backgroundColor: '#16F06D',
                    //  position: 'absolute',
                    borderTopWidth: 0,
                },
                headerStyle: {
                    //  backgroundColor: "#16F06D",
                    backgroundColor: "#00000"
                }
            })}
        >
            <Tab.Screen name="home" component={TxHome}
                options={{ title: "" }}

            />
            <Tab.Screen name="send2" component={Gift}
                options={{ title: "" }}

            />
            <Tab.Screen name="send-money" component={Send}
                options={{ title: "" }}

            />
            <Tab.Screen name="send" component={Send}
                options={{ title: "" }}
            />

        </Tab.Navigator>
    )
}

function Main() {

    const RootTab = (props: any) => (<TabBottom {...props} />)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        headerStyle: {
                            backgroundColor: "#16F06D",
                        }
                    }
                }
            >
                <Stack.Screen
                    name="Send"
                    component={RootTab}

                />
                <Stack.Screen name="Transaction" component={Trasaction} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main