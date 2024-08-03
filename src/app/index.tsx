import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Section } from "../components/Section";
import { TrendingFoods } from "../components/TrendingFoods";

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
        action={() => console.log("CLICOU NO VEJA MAIS")}
      />

      <TrendingFoods />

      <Section
        title="Famosos no DevFood"
        label={"Veja todas"}
        size={"text-xl"}
        action={() => console.log("CLICOU NO VEJA TODAS")}
      />
    </ScrollView>
  );
}
