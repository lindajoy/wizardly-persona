import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WizardlyCharactersComponent } from '../pages/characters/characters.component';
import { PatternsService } from '../shared/services/patterns.service';

type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}

@Injectable({
  providedIn: 'root'
})

// Resolve guard allows you to render your component along with your data.

export class CharactersResolver implements Resolve<WizardlyCharactersComponent> {
    constructor(private _getCharacters: PatternsService) {}  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      return this._getCharacters.getAllCharacters();
    }
  }

