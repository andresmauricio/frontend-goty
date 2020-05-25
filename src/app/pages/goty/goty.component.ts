import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {
  public games: Game[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.gameService.getGames().subscribe( response => {
      this.games = response;
    })
  }

  public vote(id: string) {
    this.gameService.postVote(id).subscribe((response: any) => {
      Swal.fire({title: '!Felicitaciones¡', icon: 'success'});
    })
  }

}
