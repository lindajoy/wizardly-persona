import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, switchMap, filter, tap, take } from "rxjs/operators";

import { FireStoreService, HarryPorterCharacter } from "./firestore.service";


@Injectable({providedIn: 'root'})


export class PatternsService
{
  private _charactersBehaviorSubject: BehaviorSubject<HarryPorterCharacter[]> = 
                                              new BehaviorSubject<HarryPorterCharacter[]>([]);

  private _housesBehaviorSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  localCharactersObservable$: Observable<HarryPorterCharacter[]>;
  localHousesObservable$: Observable<any[]>;

  constructor(private _firestoreService:FireStoreService)
  { 
    this.localCharactersObservable$ = this._charactersBehaviorSubject.asObservable();
    this.localHousesObservable$ = this._housesBehaviorSubject.asObservable();
    this._setCharactersToObservable();
    this._setHousesToLocalObservable();
  }

  getAllCharacters(): Observable<HarryPorterCharacter[]>{
    return this._charactersBehaviorSubject.asObservable();
  }

  //tap is used as a side effect
  //Side effects are used to set the data to our local observable
  private _setCharactersToObservable(){
    this._firestoreService.getAll().pipe(tap(characters => {
      console.log(characters);
      debugger
      this._charactersBehaviorSubject.next(characters);
    }))
  }

  //We transform the observable into observables of characters 
  changeCharacterNames(){
    return this.localCharactersObservable$.pipe(map(chars =>{
      return chars.map(c =>  {
        return  {... c, name: '😝MURRIFFE💨🏃🏾‍♂️'}
      })
    }))
  }

  getCharactersOfGrifyndorOnly(){
    return this.localCharactersObservable$.pipe(switchMap((characters) =>{
      return this.localHousesObservable$.pipe(map(houses =>{
        return characters.filter(c => c.house === houses.find(h => h.house === 'Gryffindor'));
      }))
    }))
  }

  combineBoth()
  {
    return combineLatest([this.localCharactersObservable$, this.localHousesObservable$]).pipe(filter(([chars, houses])=>{
      return chars.length > 0 && houses.length > 0;
    }))
  }

  private _setHousesToLocalObservable()
  {
    this._firestoreService.getHouses().pipe(tap(houses =>{
      this._housesBehaviorSubject.next(houses);
    }))
  }
}