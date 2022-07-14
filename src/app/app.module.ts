import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';
// Pages for documentation
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
// Ng-W3 Modules
import { Ngw3CardModule } from './card/ngw3-card.module';
import { Ngw3ButtonModule } from './button/ngw3-button.module';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    Ngw3CardModule,
    Ngw3ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
