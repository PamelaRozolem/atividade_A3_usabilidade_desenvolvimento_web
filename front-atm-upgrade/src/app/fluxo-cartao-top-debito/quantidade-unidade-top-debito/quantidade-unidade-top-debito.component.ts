import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-quantidade-unidade-top-debito',
  templateUrl: './quantidade-unidade-top-debito.component.html',
  styleUrls: ['./quantidade-unidade-top-debito.component.scss']
})
export class QuantidadeUnidadeTopDebito implements OnInit {
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
    this.router.navigate(['/pagamento-cartao-top-debito']);
  }

  back(){
    this.router.navigate(['/']);
  }
}
