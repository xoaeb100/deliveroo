import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Dishes from "./screens/Dishes";
import { Provider } from "react-redux";
import { store } from "./store";
import Delivery from "./screens/Delivery";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dishes" component={Dishes} />
          <Stack.Screen name="Delivery" component={Delivery} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
    // <View>
    //   <Text className="text-red-500">Home</Text>
    // </View>
  );
}
