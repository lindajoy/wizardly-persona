import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({ providedIn: 'root' })

export class FireStoreService {

  private dbPath = '/characters';

  charactersCollection

  constructor(private db: AngularFirestore) {
    this.charactersCollection = db.collection<HarryPorterCharacter>('characters');
    
  }


  getAll(){
    return this.charactersCollection.valueChanges()
  }

  create(HarryPorterCharacters: HarryPorterCharacter[]){
    HarryPorterCharacters.map(async character =>{
      await this.db.collection('characters').doc().set(character)

    })
    
    // return this.charactersRef.add(HarryPorterCharacter)
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