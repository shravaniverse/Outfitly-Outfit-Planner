import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { AddOutfitComponent } from './pages/add-outfit/add-outfit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'add-outfit', component: AddOutfitComponent },
  { path: '**', redirectTo: '' }
];
