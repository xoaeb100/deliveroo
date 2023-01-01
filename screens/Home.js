import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  UserIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { SparklesIcon } from "react-native-heroicons/mini";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-3">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">Deliver Now !</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={25} color="#00ccbb" />
      </View>

      <View className="flex-row items-center  space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 px-4">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="search for restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00ccbb" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />

        <FeaturedRow
          id="01"
          title="Featured"
          description=" Lorem ipsum dolor "
        />

        <FeaturedRow
          id="01"
          title="Tasty Discounts!"
          description=" Lorem ipsum dolor "
        />
        <FeaturedRow
          id="01"
          title="Offers near you"
          description=" Lorem ipsum dolor "
        />
        <FeaturedRow
          id="01"
          title="something"
          description=" Lorem ipsum dolor "
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
