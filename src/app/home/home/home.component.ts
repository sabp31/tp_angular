import { Component } from '@angular/core';
import { Intern } from './types/intern.type';
import { InternService } from '../services/intern.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /**
   * @var Array<Intern>
   * Array of Intern to be displayed
   */
  interns: Array<Intern> = [];
  constructor(private _service: InternService) {} // injection des dépendances dans le constructor -- son type c'est InternService

  ngOnInit(): void {    // mméthode ngOninit
    this._service.findAll() // appel au service
    .pipe( // transformer l'info à chaque fois
      take(1)   // après renvoi de l'ensemble de la première valeur (ici l'ensemble des données) il stoppe l'action et n'est plus à l'écoute
    )
    .subscribe((interns: Intern[])=> {   // souscripteur pour récupérer l'objet du service
      this.interns = interns  // récupère les infos 'interns' du tableau cité plus haut pour les afficher
    })
  }
}
