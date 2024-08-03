import { Image, Pressable, Text, View } from "react-native";
import { Restaurant } from "../entities/restaurant";
import { Ionicons } from "@expo/vector-icons";

interface VerticalRestaurantListItemProps {
  restaurant: Restaurant;
}

export function VerticalRestaurantListItem({
  restaurant,
}: VerticalRestaurantListItemProps) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />

      <View className="flex gap-2">
        <Text
          className="text-base font-bold leading-4 text-black"
          numberOfLines={2}
        >
          {restaurant.name}
        </Text>

        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
