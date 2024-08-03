import { Image, Pressable, Text, View } from "react-native";
import { Restaurant } from "../entities/restaurant";

interface HorizontalCardRestaurantProps {
  restaurant: Restaurant;
}

export function HorizontalCardRestaurant({
  restaurant,
}: HorizontalCardRestaurantProps) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log("CLICOU NO RESTAURANTE", restaurant.name)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text
        className="w-20 mt-2 text-sm leading-4 text-center text-black"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
