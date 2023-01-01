import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ArrowLeftIcon } from "react-native-heroicons/solid";
const Delivery = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <Text className="text-3xl font-bold px-3 align-middle text-center">
        Delivery
      </Text>

      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={20} color="#00ccbb" />
      </TouchableOpacity>
    </View>
  );
};

export default Delivery;
