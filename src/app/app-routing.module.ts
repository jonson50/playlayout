import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  /* { path: '**', component: ErrorComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
