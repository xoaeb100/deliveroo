import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  removeFromBasket,
} from "../features/BasketSlice";
import {
  ArrowLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
const Dishes = () => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const addItemstoBasket = () => {
    dispatch(addToBasket(title));
  };
  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket(id));
  };
  const navigation = useNavigation();
  const {
    params: { title, imgUrl },
  } = useRoute();

  //   const route = useRoute();
  //   let title = route.params.title;
  //   let imgUrl = route.params.imgUrl;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56 bg-gray-300 p-4 "
        />
        <TouchableOpacity
          onPress={() => {
            setIsPressed(!isPressed);
            console.log(isPressed);
          }}
        >
          <Text className="text-3xl font-bold px-3">{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>

      {isPressed && (
        <View className="bg-white px-3">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length > 0}
              onPress={removeItemsFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00ccbb" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemstoBasket}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {items.length > 0 && (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Delivery");
            }}
          >
            <ShoppingCartIcon size={40} color="#00ccbb" />
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Dishes;
