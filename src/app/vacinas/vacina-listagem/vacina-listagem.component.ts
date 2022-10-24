import { Component, OnInit } from '@angular/core';
import { Vacina } from 'src/app/shared/model/vacina';
import { VacinasService } from "../../shared/service/vacinas.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})
export class VacinaListagemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paisOrigem', 'estagioPesquisa', 'dataInicioPesquisa', 'responsavel'];
  public dataSource: Array<Vacina> = new Array();
  constructor(private vacinaService: VacinasService, private router: Router) { }

  ngOnInit(): void {
    this.buscarVacinas();
  }

  buscarVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.dataSource = resultado;
      },
      erro => {
        console.log("Deu erro. Causa: " + erro);
      }
    )
  }

  public buscarPorId(){
    //TODO
  }

  public buscarPorPesquisador(){
    //TODO
  }

  public voltar(){
    //TODO testar a rota
    this.router.navigate(['/']);
  }
}


