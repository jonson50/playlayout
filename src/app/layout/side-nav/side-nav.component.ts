import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  showSideNav: Observable<boolean>;
  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = 300;
  @Input() direction: string = 'left';

  constructor(private navService: NavigationService) {
    this.showSideNav = this.navService.getShowNav();
    this.navService.setSideNavWidth(this.navWidth);
  }

  ngOnInit(): void {
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  toggleSideNav(state:boolean) {
    this.navService.setShowNav(state);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    // Checking window.innerWidth to know screen size
    if(window.innerWidth < 993) {
      // small devices
      navBarStyle.display = 'block'
      navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
      navBarStyle.width = this.navWidth + 'px';
      navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
      if(!showNav) {
        navBarStyle.left = -300+'px';
      } else {
        navBarStyle.left = 0+'px';
      }
    } else {
      // medium and large screens
      navBarStyle.width = this.navWidth + 'px';
    }

    return navBarStyle;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {}

}
