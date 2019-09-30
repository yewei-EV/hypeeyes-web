import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hypeeyes-web';

  ngOnInit(): void {
    const height = document.body.scrollHeight;
    if (location.origin === 'http://127.0.0.1:4200') {
      window.parent.postMessage(height, 'http://127.0.0.1:4567');
    } else if (location.origin === 'http://localhost:4200') {
      window.parent.postMessage(height, 'http://localhost:4567');
    } else {
      window.parent.postMessage(height, location.protocol + '//hypeeyes.com');
    }
  }
}
