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
import { TabsComponent } from './pages/tabs/tabs.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
// Ng-W3 Modules
import { Ngw3CardModule } from './card/ngw3-card.module';
import { Ngw3ButtonModule } from './button/ngw3-button.module';
import { Ngw3TabsModule } from './tabs/ngw3-tabs.module';
import { Ngw3AccordionModule } from './accordion/ngw3-accordion.module';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    ButtonsComponent,
    CardsComponent,
    TabsComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ngw3CardModule,
    Ngw3ButtonModule,
    Ngw3TabsModule,
    Ngw3AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
