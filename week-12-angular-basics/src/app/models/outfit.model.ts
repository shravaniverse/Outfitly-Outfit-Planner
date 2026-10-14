export interface Outfit {
  id: number;
  name: string;
  category: string;
  season: string;
  price: number;
  inStock: boolean;
  colorHex: string;
  icon: string;
  pieces: {
    top: string;
    bottom: string;
    footwear: string;
  };
  isFavorite?: boolean;
}
