import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useMealStore = defineStore("meal", () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        return response.data.meals[0];
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { isLoading, isError, error, data };
});
