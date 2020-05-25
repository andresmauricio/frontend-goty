import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games;
  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.firestore.collection('goty').valueChanges()
    .pipe(map(data => {
      return data.map(({name, votes}) => ({name, value: votes}))
    }))
    .subscribe( response => { this.games = response })
  }

}
