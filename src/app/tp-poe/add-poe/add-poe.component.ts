import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poe } from '../types/poe-type';
import { ServPoeService } from '../services/serv-poe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-poe',
  templateUrl: './add-poe.component.html',
  styleUrl: './add-poe.component.scss'
})
export class AddPoeComponent {
  public poeForm: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _poeService: ServPoeService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.poeForm = this._formBuilder.group({
      name: [
        '', //default value
        [Validators.required, Validators.minLength(3)],
      ],
      duration: [
        '', //default value
        [Validators.required, Validators.min(1)],
      ],
    });
  }
  onSubmit(): void {
    this._poeService
      .add(this.poeForm.value)
      .subscribe((liste_poe: Poe) => {
        this._router.navigate(['/add_poe']);
      });
  }
}