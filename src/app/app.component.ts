import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feedback-component-angular-elements';

  showMessage() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-world></app-hello-world>';
  }
}
