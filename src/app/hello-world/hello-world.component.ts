import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorldComponent implements OnInit, OnChanges{
  @Input() title = '';
  @Input('to-do-list') toDoList = '';
  @Output() clicked = new EventEmitter();

  toDoList$ = new BehaviorSubject<any>('');

  constructor() { }

  ngOnInit() { }

  onButtonClicked() {
    const completedTasksCount = this.toDoList$.value.filter((task) => task.done).length;
    this.clicked.emit(completedTasksCount);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['toDoList']) {
      this.toDoList$.next(JSON.parse(changes['toDoList'].currentValue));
    }
  }

}
