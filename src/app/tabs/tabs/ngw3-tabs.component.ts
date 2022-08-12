import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Ngw3TabComponent } from '../tab/ngw3-tab.component';

@Component({
  selector: 'ngw3-tabs',
  templateUrl: './ngw3-tabs.component.html',
  styleUrls: ['./ngw3-tabs.component.scss']
})
export class Ngw3TabsComponent implements AfterContentInit {

  @ContentChildren(Ngw3TabComponent)
  tabs!: QueryList<Ngw3TabComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    // get all active tabs
    const selectedTab = this.tabs.find(tab => tab.selected);

    // if there is no active tab set, activate the first
    if(!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: Ngw3TabComponent){
    // deactivate all tabs
    this.tabs.forEach(tab => tab.selected = false);

    // activate the tab the user has clicked on.
    tab.selected = true;
  }

}
