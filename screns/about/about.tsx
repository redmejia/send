import React, { FC } from "react";
import { Text } from "react-native";
interface Person {
    name : string;
    age : number;
    skills? : string[] // type first datastruct after
}


function About({name, age}: Person) : JSX.Element  {

   return(
     <>
         <Text>{name}</Text>
         <Text >{age}</Text>
     </>
   )    

 };

export default About;