
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import BottomTabs from "./BottomTab";

import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
          <Stack.Navigator>
              <Stack.Screen name="Notifício" component={Welcome} options = {{ headerShown: false }}/>
              <Stack.Screen name="Main" component={BottomTabs} options = {{ headerShown: false }}/>
          </Stack.Navigator>
  
    )

}
