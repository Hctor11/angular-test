import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>

    <h1>LOS JUEGOS FAVORITOS DE {{ username }}</h1>

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

  @Input() username =  '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }

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
