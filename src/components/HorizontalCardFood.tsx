import { Image, Pressable, Text, View } from "react-native";
import { Food } from "../entities/food";
import { Ionicons } from "@expo/vector-icons";

interface HorizontalCardFoodProps {
  food: Food;
}

export function HorizontalCardFood({ food }: HorizontalCardFoodProps) {
  return (
    <Pressable className="relative flex flex-col rounded-xl">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <View className="absolute flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-full bg-neutral-900/90 top-2 right-2">
        <Ionicons name="star" size={14} color={"#ca8a04"} />
        <Text className="text-sm text-white">{food.rating}</Text>
      </View>

      <Text className="text-lg font-medium text-green-700">
        R$ {food.price}
      </Text>
      <Text className="mt-1 text-black">{food.name}</Text>
      <Text className="text-sm text-neutral-600">
        {food.time} - R$ {food.delivery}
      </Text>
    </Pressable>
  );
}
