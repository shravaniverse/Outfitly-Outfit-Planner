import { Injectable } from '@angular/core';
import { Outfit } from '../models/outfit.model';

@Injectable({
  providedIn: 'root'
})
export class OutfitService {
  // In-memory outfit dataset managed centrally by the service
  private outfits: Outfit[] = [
    {
      id: 1,
      name: 'Smart Campus Denim Ensemble',
      category: 'Casual',
      season: 'Autumn',
      price: 2499,
      icon: '👕',
      pieces: {
        top: 'Chambray Overshirt & Cotton White Tee',
        bottom: 'Charcoal Straight Chinos',
        footwear: 'Minimal Leather Sneakers'
      },
      notes: 'Classic daily campus wear with high comfort and versatility.',
      dateAdded: '2026-10-10'
    },
    {
      id: 2,
      name: 'Executive Presentation Blazer Suit',
      category: 'Formal',
      season: 'All-Season',
      price: 6999,
      icon: '👔',
      pieces: {
        top: 'Structured Navy Blazer & Spread Collar White Shirt',
        bottom: 'Tailored Wool Flat-Front Trousers',
        footwear: 'Brown Derby Leather Shoes'
      },
      notes: 'Crisp styling appropriate for placement interviews and project defenses.',
      dateAdded: '2026-10-11'
    },
    {
      id: 3,
      name: 'Neon Glow Fest Statement',
      category: 'Party',
      season: 'Spring',
      price: 3899,
      icon: '🎉',
      pieces: {
        top: 'Printed Cuban Collar Bowling Shirt',
        bottom: 'Relaxed Jet Black Cargo Pants',
        footwear: 'Chunky High-Top Sneakers'
      },
      notes: 'Vibrant youth aesthetic suitable for college music nights and cultural festivals.',
      dateAdded: '2026-10-12'
    }
  ];

  // Retrieve all outfits
  getOutfits(): Outfit[] {
    return [...this.outfits];
  }

  // Retrieve a single outfit by ID
  getOutfitById(id: number): Outfit | undefined {
    return this.outfits.find(o => o.id === id);
  }

  // Add a newly submitted outfit from the form
  addOutfit(newOutfitData: Omit<Outfit, 'id' | 'dateAdded'>): Outfit {
    const nextId = this.outfits.length > 0 ? Math.max(...this.outfits.map(o => o.id)) + 1 : 1;
    const newOutfit: Outfit = {
      ...newOutfitData,
      id: nextId,
      dateAdded: new Date().toISOString().split('T')[0]
    };
    this.outfits.unshift(newOutfit);
    return newOutfit;
  }

  // Delete an outfit
  deleteOutfit(id: number): void {
    this.outfits = this.outfits.filter(o => o.id !== id);
  }

  // Get total count
  getOutfitCount(): number {
    return this.outfits.length;
  }
}
