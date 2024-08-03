import { FlatList } from "react-native";
import { useMockFoods } from "../hooks";
import { HorizontalCardFood } from "./HorizontalCardFood";

export function TrendingFoods() {
  const foods = useMockFoods();

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
