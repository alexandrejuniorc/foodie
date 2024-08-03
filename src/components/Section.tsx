import { Pressable, Text, View } from "react-native";

interface SectionProps {
  title: string;
  label: string;
  size: "text-lg" | "text-xl" | "text-2xl";

  action: () => void;
}

export function Section({ title, label, size, action }: SectionProps) {
  return (
    <View className="flex flex-row items-center justify-between w-full px-4">
      <Text className={`${size} font-semibold my-4 self-start`}>{title}</Text>

      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
