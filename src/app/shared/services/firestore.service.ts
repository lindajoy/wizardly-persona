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


  getAll() 
  {
    return this.charactersCollection.valueChanges()
  }

  create(HarryPorterCharacters: HarryPorterCharacter[])
  {
    HarryPorterCharacters.map(async character =>{
      await this.db.collection('characters').doc().set(character);
    })
  }

  getHouses()
  {
    return this.housesCollection.valueChanges();
  }

}


export interface HarryPorterCharacter 
{
  id: any;
  name: string,
  image: string,
  house: string,
  wizard: boolean,
  ancestry: string

}
