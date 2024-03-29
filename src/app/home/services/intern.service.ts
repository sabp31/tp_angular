import { Injectable } from '@angular/core';
import { Intern } from '../home/types/intern.type';
import { IService } from '../../core/interface/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  add(item: Intern): Observable<Intern> {
    return this._httpClient.post<Intern>(
      'http://localhost:3000/interns',
      item
    )
  }

    findAll(): Observable<Intern[]>{
      return this._httpClient.get<Intern[]>(
        'http://localhost:3000/interns'
      )
      .pipe(      // sert à enchainer des choses
        map((interns: Intern[]) => {
          return interns.sort((i1: Intern, i2:Intern)=> {
            return i1.lastname.localeCompare(i2.lastname)
          
        })    // 
      })
      )
    }

  get interns(): Array<Intern> {
    return this._interns
  }
}
