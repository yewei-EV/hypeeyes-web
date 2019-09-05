import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'hypeeyes-web';
  offsetHeight = 0;
  constructor() {
    document.domain = 'localhost';
  }

  ngAfterViewChecked(): void {
    const offsetHeight = document.body.offsetHeight;
    if (this.offsetHeight < offsetHeight) {
      this.offsetHeight = offsetHeight;
    }
    parent.postMessage({type: 'height', height: this.offsetHeight}, '*');
    console.log(this.offsetHeight);
  }

}
