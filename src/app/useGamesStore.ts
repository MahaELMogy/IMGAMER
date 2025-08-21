import { create } from "zustand";
import { Game, ArrOffFun } from "./types/Games";

// إعدادات الـ fetch
const ForCallApi = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "d9f6947e91msh942820ea3410492p1eaba5jsnad5ce5661cb5",
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
      const data = await response.json();

      // التحقق أن البيانات Array
      if (Array.isArray(data)) {
        set({ Games: data, isLoading: false, error: null });
      } else {
        set({
          Games: [],
          isLoading: false,
          error: true,
          errorMsg: "Invalid API response",
        });
      }
    } catch (err: unknown) {
      console.error("❌ Error fetching data:", err);

      let message = "حدث خطأ غير متوقع";
      if (err instanceof Error) {
        message = err.message;
      }

      set({
        isLoading: false,
        error: true,
        errorMsg: message,
      });
    }
  },
}));
