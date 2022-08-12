import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { AccordionComponent } from './pages/accordion/accordion.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  /* { path: '**', component: ErrorComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
