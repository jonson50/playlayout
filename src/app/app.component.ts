import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playlayout';

  constructor(private navService: NavigationService) {}

  toggleSideNav(state:boolean) {
    this.navService.setShowNav(state);
  }

  setMainWidth() {
    let mainAreaStyle: any = {};
    mainAreaStyle['margin-left'] = this.navService.getSideNavWidth() + 'px';
    return mainAreaStyle;
  }
}
