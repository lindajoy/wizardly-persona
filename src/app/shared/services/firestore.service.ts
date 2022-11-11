import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";


@Injectable({ providedIn: 'root' })

export class FireStoreService {

  private dbPath = '/characters';

  charactersCollection: AngularFirestoreCollection<HarryPorterCharacter>
  housesCollection:AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.charactersCollection = db.collection<HarryPorterCharacter>('characters');
    this.housesCollection = db.collection<any>('houses')
    
  }


  getAll(){
    return this.charactersCollection.valueChanges()
  }

  create(HarryPorterCharacters: HarryPorterCharacter[]){
    HarryPorterCharacters.map(async character =>{
      await this.db.collection('characters').doc().set(character);
    })
  }

  getHouses(){
    return this.housesCollection.valueChanges();
  }

}


export interface HarryPorterCharacter {
  id: any;
  name: string,
  image: string,
  house: string,
  wizard: boolean,
  ancestry: string

}
const character = {
  "name": "Harry Potter",
  "alternate_names": [],
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "wizard": true,
  "ancestry": "half-blood",
  "eyeColour": "green",
  "hairColour": "black",
  "wand": { "wood": "holly", "core": "phoenix feather", "length": 11 },
  "patronus": "stag",
  "hogwartsStudent": true,
  "hogwartsStaff": false,
  "actor": "Daniel Radcliffe",
  "alternate_actors": [],
  "alive": true,
  "image": "https://hp-api.herokuapp.com/images/harry.jpg"
}