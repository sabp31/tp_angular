import { Injectable } from '@angular/core';
import { Intern } from '../home/types/intern.type';
import { IService } from '../../core/interface/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(
    private _httpClient: HttpClient
  ) { }

  add(item: Intern): void {
    this._interns.push(item)
  }

    findAll(): Observable<Intern[]>{
      return this._httpClient.get<Intern[]>(
        'http://localhost:3000/interns'
      )
    }

  get interns(): Array<Intern> {
    return this._interns
  }
}
