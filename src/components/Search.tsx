import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export function Search() {
  return (
    <View className="flex-row items-center w-full gap-2 px-4 bg-transparent border rounded-full border-slate-500 h-14">
      <Feather name="search" size={24} color={"#64748b"} />
      <TextInput
        placeholder="Procure sua comida..."
        className="flex-1 w-full h-full bg-transparent"
      />
    </View>
  );
}
