import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Entra21-Angular';

constructor(private router: Router) { }


public irParaTelaListagemVacinas(){
  //TODO testar a rota
  this.router.navigate(['/vacinas']);
}
}
