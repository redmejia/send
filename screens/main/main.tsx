import React from "react";
import Home from "../Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Send from "../Send/Send";
import { Image, View } from "react-native";

const BottomTab = createBottomTabNavigator();

function Main() {
    return(
        <NavigationContainer>
        <BottomTab.Navigator
            
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarIcon : () => {

                    if (route.name === "home") {
                        return(
                            <View
                            style={{
                                marginTop : 20,
                            }}
                        >
                             <Image 
                                    source={require('../public/hometx.png')}
                                />
                               
                            </View>
                        )
                        
                    }

                    if (route.name === "send2") {
                        return(
                            <View
                                style={{
                                    marginTop : 20,
                                }}
                            >
                                <Image 
                                    source={require('../public/gift.png')}
                                />
                            </View>
                        )
                    }
                    if (route.name === "send-money") {
                        return(
                        <View
                                style={{
                                    marginTop : -10,
                                }}
                            >
                                <Image 
                                    source={require('../public/sendcircle.png')}
                                />
                            </View>
                        )
                    }

                    if (route.name === "send") {
                        return(
                            <View
                                style={{
                                    marginTop : 20,
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
                  height: 90,
                  paddingHorizontal: 5,
                  paddingTop: 0,
                  backgroundColor: '#16F06D',
                  position: 'absolute',
                  borderTopWidth: 0,
              },
              headerStyle: {
                  backgroundColor : "#16F06D",
              }
            })}
        >
            <BottomTab.Screen name="home" component={Home}
                options={{title: ""}} 

            /> 
             <BottomTab.Screen name="send2" component={Send}
               options={{title : ""}} 

            />
             <BottomTab.Screen name="send-money" component={Send}
               options={{title : ""}} 

            />  
            <BottomTab.Screen name="send" component={Send}
                    options={{title: ""}}
            /> 

        </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default Main