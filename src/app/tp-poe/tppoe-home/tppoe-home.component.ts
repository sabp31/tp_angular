import { Component } from '@angular/core';
import { ServPoeService } from '../services/serv-poe.service';
import { Poe } from '../types/poe-type';

@Component({
  selector: 'app-tppoe-home',
  templateUrl: './tppoe-home.component.html',
  styleUrl: './tppoe-home.component.scss',
})
export class TppoeHomeComponent {
  list_poe: Array<Poe> = [];
  constructor(private _service: ServPoeService) {}

  ngOnInit(): void {
    this.list_poe = this._service.List_poe;
  }
}
