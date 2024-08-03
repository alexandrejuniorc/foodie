import { FlatList } from "react-native";
import { HorizontalCardRestaurant } from "./HorizontalCardRestaurant";
import { useMockRestaurants } from "../hooks/use-mock-restaurants";

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
