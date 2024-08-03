import { useEffect, useState } from "react";
import { Restaurant } from "../entities/restaurant";

export function useMockRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.0.105:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getRestaurants();
  }, [restaurants]);

  return restaurants;
}
