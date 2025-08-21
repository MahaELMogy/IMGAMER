export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  freetogame_profile_url: string;
  // زوّد أو نقص حسب اللي جاي من الـ API
}

export interface ArrOffFun {
  Games: Game[];
  errorMsg: string;
  isLoading: boolean;
  error: unknown ;
  funFetch: (category: string) => Promise<void>;
}
