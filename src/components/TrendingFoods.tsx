import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { HorizontalCardFood } from "./HorizontalCardFood";
import { Food } from "../entities/food";

export function TrendingFoods() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.105:3000/foods");
      const data = await response.json();
      setFoods(data);
    }

    getFoods();
  }, [foods]);

  return (
    <FlatList
      data={foods}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <HorizontalCardFood food={item} />;
      }}
    />
  );
}
