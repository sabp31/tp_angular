import { Injectable } from '@angular/core';
import { Intern } from '../home/types/intern.type';
import { IService } from '../../core/interface/i-service';

@Injectable({
  providedIn: 'root'
})
export class InternService implements IService<Intern>{
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
  add(item: Intern): void {
    this._interns.push(item)
  }

  get interns(): Array<Intern> {
    return this._interns
  }
}
