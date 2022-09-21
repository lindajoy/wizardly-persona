import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  registerForm!: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._initializeForm();

  }

  private _initializeForm(){
    this.registerForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(16)]],
      lastName: ['', [Validators.required, Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.maxLength(64)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(64)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(64)]],
      email:['', [Validators.required, Validators.maxLength(64)]]
    })
  }

}
