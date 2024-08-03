import { View } from "react-native";
import { useMockRestaurants } from "../hooks";
import { VerticalRestaurantListItem } from "./VerticalRestaurantListItem";

export function VerticalRestaurantList() {
  const restaurants = useMockRestaurants();

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
