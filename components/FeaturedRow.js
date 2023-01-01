import { View, Text, ScrollView } from "react-native";
import React from "react";

import { ArrowRightCircleIcon } from "react-native-heroicons/outline";
const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightCircleIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4 ">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      ></ScrollView>
    </View>
  );
};

export default FeaturedRow;
