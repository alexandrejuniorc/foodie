import { FlatList } from "react-native";
import { useMockRestaurants } from "../hooks";
import { HorizontalCardRestaurant } from "./HorizontalCardRestaurant";

export function Restaurants() {
  const restaurants = useMockRestaurants();

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
