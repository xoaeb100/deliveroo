import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        idx="01"
        imgUrl="https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Pizza"
      />
      <CategoryCard
        idx="02"
        imgUrl="https://images.pexels.com/photos/5137026/pexels-photo-5137026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Cake"
      />
      <CategoryCard
        idx="03"
        imgUrl="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Biryani!"
      />
      <CategoryCard
        idx="04"
        imgUrl="https://images.pexels.com/photos/4664463/pexels-photo-4664463.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Desserts"
      />
      <CategoryCard
        idx="05"
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Sushi"
      />
      <CategoryCard
        idx="06"
        imgUrl="https://images.pexels.com/photos/14678998/pexels-photo-14678998.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Burger"
      />
    </ScrollView>
  );
};

export default Categories;
