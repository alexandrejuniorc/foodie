import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import {
  Banner,
  Header,
  Restaurants,
  Search,
  Section,
  TrendingFoods,
  VerticalRestaurantList,
} from "../components";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginTop: statusBarHeight + 8 }} className="w-full px-4">
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        title="Comidas em alta"
        label={"Veja mais"}
        size={"text-2xl"}
        action={() => console.log("CLICOU EM COMIDAS EM ALTA")}
      />
      <TrendingFoods />

      <Section
        title="Famosos no DevFood"
        label={"Veja todos"}
        size={"text-xl"}
        action={() => console.log("CLICOU EM FAMOSOS NO DEVFOOD")}
      />
      <Restaurants />

      <Section
        title="Restaurantes"
        label={"Veja todos"}
        size={"text-xl"}
        action={() => console.log("CLICOU EM RESTAURANTES")}
      />
      <VerticalRestaurantList />
    </ScrollView>
  );
}
