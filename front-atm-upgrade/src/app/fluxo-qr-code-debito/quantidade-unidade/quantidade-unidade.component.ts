import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quantidade-unidade',
  templateUrl: './quantidade-unidade.component.html',
  styleUrls: ['./quantidade-unidade.component.scss']
})
export class QuantidadeUnidadeComponent implements OnInit {
  qtdadeUnidade = [
    {unidade: 1},
    {unidade: 2},
    {unidade: 3},
    {unidade: 4},
    {unidade: 5}
  ];
  unidade;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectTipoUnidade(data) {
    console.log(data);
  }

  goTo(){
    this.router.navigate(['/pagamento-cartao-debito']);
  }

  back(){
    this.router.navigate(['/selecionar-unidade']);
  }

}
