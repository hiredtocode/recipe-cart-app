import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-cart-app';
  loadedLink = 'recipes'; // the default link name

  onNavigate(link: string) {
    this.loadedLink = link; // this link is passed down via $event from onNavigate() method
  }
}
