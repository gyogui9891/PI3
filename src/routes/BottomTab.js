import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from '../pages/Main';
import Marketplace from '../pages/Marketplace';
import Panel from '../pages/Panel';
import Conta from '../pages/Conta';

const Tab =  createBottomTabNavigator();

export default function BottomTabs(){
    return(

        <Tab.Navigator >
            <Tab.Screen name="Home" component={Main} options={{headerShown: false}}/>
            <Tab.Screen name="Painel de Avisos" component={Panel} options={{headerShown: false}}/>
            <Tab.Screen name="Marketplace" component={Marketplace} options={{headerShown: false}}/>
            <Tab.Screen name="Conta" component={Conta} options={{headerShown: false}}/>
        </Tab.Navigator>

    )
}
