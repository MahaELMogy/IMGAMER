import { create } from "zustand";
import { Game, ArrOffFun } from "./types/Games";

// إعدادات الـ fetch
const ForCallApi = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
  },
};

export const StoreApi = create<ArrOffFun>((set) => ({
  Games: [],
  errorMsg: "",
  isLoading: false,
  error: null,

  funFetch: async (category: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        ForCallApi
      );
      const data: Game[] = await response.json();
      set({ Games: data, isLoading: false, error: null });
      console.log(data);
    } catch (err: unknown) {
      console.error("❌ Error fetching data:", err);
      set({
        isLoading: false,
        error: true,
        errorMsg: err.message || "حدث خطأ غير متوقع",
      });
    }
  },
}));
