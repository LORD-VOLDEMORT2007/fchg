import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import StoryScreen from '../screens/StoryScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="StoryScreen" component={StoryScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;