import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';

import { Ngw3CardModule } from './card/ngw3-card.module';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    ButtonsComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ngw3CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
