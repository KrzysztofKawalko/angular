import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html'
// })

@Component({
  selector: 'my-app',
  template: `
    <menu></menu>
    <router-outlet></router-outlet>
    <footer></footer>
    <div class="container-fluid">
    <ngbd-carousel-basic></ngbd-carousel-basic>
    </div>
  `,
  styles: [ `` ]
})


export class AppComponent {
}
