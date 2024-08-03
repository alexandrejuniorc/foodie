import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

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
    </ScrollView>
  );
}
