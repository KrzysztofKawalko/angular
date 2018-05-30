import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <ul>
      <li routerLink="/" 
        routerLinkActive="active" 
        [routerLinkActiveOptions]="{exact:true}">Strona główna</li>

      <li 
        routerLink="/opis" 
        routerLinkActive="active">Opis</li>
        
      <li 
        routerLink="/kontakt" 
        routerLinkActive="active">Kontakt</li>
    </ul>
  `,
  styles: [`
    .active {
      color: green;
    }

    * {
      outline: none;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    ul li {
      display: inline-block;
      width: 100px;
      text-align: center;
    }

    ul li:hover {
      cursor: pointer;
      opacity: .5;
    }
  `]
})
export class MenuComponent {}