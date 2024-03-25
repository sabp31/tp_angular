import { Injectable } from '@angular/core';
import { Intern } from '../home/types/intern.type';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  public _interns: Array<Intern> = [
    {
      lastname: 'Provo',
      firstname: 'Sabine'
    },
    {
      lastname: 'Casper',
      firstname: 'Manon'
    } 

  ]

  constructor() { }

  get interns(): Array<Intern> {
    return this._interns
  }
}
