import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Observable, Subscription } from 'rxjs';

import { HarryPorterCharacter } from 'src/app/shared/services/firestore.service';
import { PatternsService } from 'src/app/shared/services/patterns.service';

@Component({
  selector: 'wzardly-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.scss'],
})

export class WizardlyCharactersComponent implements OnInit {
  
  //Observables for async operations
  characters$!: Observable<HarryPorterCharacter[]>;
  houses$!: Observable<any[]>;

  localCharacters:HarryPorterCharacter[] = [];
  characterSubs!: Subscription;
  houseSubs!: Subscription;
  localHouses: any[] = [];
  chars!: Observable<HarryPorterCharacter[]>;
  charsCollection: AngularFirestoreCollection<HarryPorterCharacter> | undefined;



  constructor(private _patternService:PatternsService,
              private readonly afs: AngularFirestore ) 
  { }

  ngOnInit() { 
    this.getAll();
  }

  // .snapshotChanges() returns a DocumentChangeAction[], which contains
  // a lot of information about "what happened" with each change. If you want to
  // get the data and the id use the map operator.
  

  getAll()
  {
    this.characters$ = this._patternService.localCharactersObservable$;
    this.houses$ = this._patternService.localHousesObservable$;
  }

  subscribeToCharacters()
  {
    this.characterSubs = 
    this._patternService.localCharactersObservable$.subscribe(characters =>
    {
      this.localCharacters = characters;
    })
  }

  subscribeToHouses()
  {
    this.houseSubs = this._patternService.localHousesObservable$.subscribe(houses => {
      this.localHouses = houses
    })
  }

  ngOnDestroy()
  {
    this.characterSubs.unsubscribe();
    this.houseSubs.unsubscribe();
  }
}