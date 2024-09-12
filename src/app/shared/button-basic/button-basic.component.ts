import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.css']
})
export class ButtonBasicComponent implements OnInit {

  @Input() label: string = 'Click Me';
  @Input() onClick: () => void = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}