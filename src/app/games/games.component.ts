import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for(game of games; track game.id){
        <li>
          {{game.name}}
        </li>
      }
    </ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Death grips: The revenge of mc ride'
    },
    {
      id: 2,
      name: 'GTA 3'
    },
    {
      id: 3,
      name: 'Geometry dash'
    }
  ]
}
