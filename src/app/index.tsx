import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import Constants from "expo-constants";
import { Banner } from "../components/Banner";

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
      </View>
    </ScrollView>
  );
}
