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
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Pizza"
      />
      <CategoryCard
        idx="02"
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Cake"
      />
      <CategoryCard
        idx="03"
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Biryani!"
      />
      <CategoryCard
        idx="04"
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Desserts"
      />
      <CategoryCard
        idx="05"
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 5"
      />
    </ScrollView>
  );
};

export default Categories;
