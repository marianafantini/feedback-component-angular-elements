import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
