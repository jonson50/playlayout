import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngw3-card',
  templateUrl: './ngw3-card.component.html',
  styleUrls: ['./ngw3-card.component.css']
})
export class Ngw3CardComponent implements OnInit {

  @Input()
  type: string | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.type);
  }

}
