import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


  goToCharacters()
  {
    return this._router.navigate(['/characters']);
  }

  goFillForm() 
  {
    return this._router.navigate(['/fillform']);
  }

}
