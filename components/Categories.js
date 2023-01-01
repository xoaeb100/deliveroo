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
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 2 "
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 4"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 5"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 6"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 7"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 8"
      />
      <CategoryCard
        imgUrl="https://www.thesquareclub.com/wp-content/uploads/bfi_thumb/Evoke-Pictures__Square-Club__156-pjhn8bbhgecghiz5rqgm3wdoie2isqo9polyoo8xqk-pjhnkl3moj58295g41f9pvpfb4s429raxsbp17no3w.jpg"
        title="Testing 9"
      />
    </ScrollView>
  );
};

export default Categories;
