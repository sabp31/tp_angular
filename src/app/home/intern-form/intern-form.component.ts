import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss'
})
export class InternFormComponent {
  public internForm: FormGroup = new FormGroup({})

constructor(
  private _formBuilder: FormBuilder
  ) {}
  ngOnInit(): void{
    this.internForm = this._formBuilder.group({
      lastname: [
        '', //default value
        [
          Validators.required,
          Validators.minLength(3)
        
        ]
      ],
      firstname: [
        '', //default value
        [
          Validators.required
        ]
      ]
    })
  }
  onSubmit():void {

  }
}
