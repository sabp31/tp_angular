import { Injectable } from '@angular/core';
import { Poe } from '../types/poe-type';

@Injectable({
  providedIn: 'root'
})
export class ServPoeService {
  private _List_poe: Array<Poe> = [
  {
    name: 'POE cybersécurité',
    duration: 345
  }
  ]  


  constructor() {}

  get List_poe(): Array<Poe> {
    return this._List_poe
  }
}
