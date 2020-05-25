import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private API: string;

  constructor(private http: HttpClient) { 
    this.API = environment.api;
  }

  public getGames() {
    return this.http.get<Game[]>(`${this.API}api/goty`);
  }

  public postVote(id: string) {
    return this.http.post(`${this.API}api/goty/${id}`, {});
  }


}
