import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imgUrl, title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative mr-2"
      onPress={() => {
        navigation.navigate("Dishes", { title, imgUrl });
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
