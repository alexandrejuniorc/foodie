import { FlatList } from "react-native";
import { HorizontalCardFood } from "./HorizontalCardFood";
import { useMockFoods } from "../hooks/use-mock-foods";

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
