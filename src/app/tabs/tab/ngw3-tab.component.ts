import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngw3-tab',
  templateUrl: './ngw3-tab.component.html',
  styleUrls: ['./ngw3-tab.component.scss']
})
export class Ngw3TabComponent implements OnInit {
  @Input('tabTitle') title!: string;
  @Input() selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
