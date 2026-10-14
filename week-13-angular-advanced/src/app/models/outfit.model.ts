export interface Outfit {
  id: number;
  name: string;
  category: 'Casual' | 'Formal' | 'Party' | 'Winter' | 'Athleisure';
  season: 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All-Season';
  price: number;
  icon: string;
  pieces: {
    top: string;
    bottom: string;
    footwear: string;
  };
  notes?: string;
  dateAdded?: string;
}
