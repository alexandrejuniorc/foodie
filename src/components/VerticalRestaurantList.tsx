import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Restaurant } from "../entities/restaurant";
import { VerticalRestaurantListItem } from "./VerticalRestaurantListItem";

export function VerticalRestaurantList() {
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
    <View className="flex-1 w-full h-full gap-4 px-4 mb-11">
      {restaurants.map((restaurant) => (
        <VerticalRestaurantListItem
          restaurant={restaurant}
          key={restaurant.id}
        />
      ))}
    </View>
  );
}
