import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input() title = '';
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.clicked.emit(true);
  }

}
