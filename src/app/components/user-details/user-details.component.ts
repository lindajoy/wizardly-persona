import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  randomForm!: FormGroup;
  showFirstStep!: boolean;
  showSecondStep!: boolean;
  tempFormVals: any;
  isSaved = false;



  constructor(private _fb: FormBuilder,
              private _router: Router,
              public authservice: AuthService) { }

  ngOnInit(): void {
    this.randomForm = this._fb.group({
      favoriteFood: ['', [Validators.required, Validators.maxLength(64)]]
    })
  }

  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure? l');
      return of(result);
    }

    return of(true);
  }

  onSubmit() {
    this.isSaved = true;
  }



}

