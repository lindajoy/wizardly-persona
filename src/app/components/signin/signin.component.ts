import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  showFirstStep!: boolean;
  showSecondStep!: boolean;
  tempFormVals: any;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              public authservice: AuthService) { }

  ngOnInit(): void {
    this.showFirstStep = true;
    this.showSecondStep = false;
    // The loginForm has two form fields: email and password
    this.loginForm = this._fb.group({
      name: ['', [Validators.required, Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.maxLength(64)]]
    })
  }

  hasErrors(ctrlName: string) {
    return this.loginForm.get(ctrlName)?.invalid
      && (this.loginForm.get(ctrlName)?.touched || this.loginForm.get(ctrlName)?.dirty);
  }

  goToNextStep() {
    this.showFirstStep = false;
    this.showSecondStep = true;
    const formVals = this.loginForm.value;
    this.tempFormVals = formVals;
  }

  goToHomePage() {
    return this._router.navigate(['home'])
  }

  getWizardlyLanding = () => '/assets/images/magic/wizard.png';


}
