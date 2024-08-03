import { useEffect, useState } from "react";
import { Food } from "../entities/food";

export function useMockFoods() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.105:3000/foods");
      const data = await response.json();
      setFoods(data);
    }

    getFoods();
  }, [foods]);

  return foods;
}
