import { View, Text } from "react-native";
import React from "react";
import { selectBasketItems } from "../features/BasketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;
