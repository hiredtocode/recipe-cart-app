import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-cart-app';
  loadedLink = 'recipes';

  onNavigate(link: string) {
    this.loadedLink = link;
  }
}
