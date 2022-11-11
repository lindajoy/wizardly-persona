import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FireStoreService, HarryPorterCharacter } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'wzardly-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.scss'],
})

export class WizardlyCharactersComponent implements OnInit {
  
  characters$!: Observable<HarryPorterCharacter[]>;

  constructor(private _firestoreService:FireStoreService ) { }

  ngOnInit() { 
    this.getAll();
  }


  getAll(){
    this.characters$ = this._firestoreService.getAll()
  }
}