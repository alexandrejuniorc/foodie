import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Restaurant } from "../entities/restaurant";
import { HorizontalCardRestaurant } from "./HorizontalCardRestaurant";

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.0.105:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getRestaurants();
  }, [restaurants]);

  return (
    <FlatList
      data={restaurants}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <HorizontalCardRestaurant restaurant={item} />;
      }}
    />
  );
}
