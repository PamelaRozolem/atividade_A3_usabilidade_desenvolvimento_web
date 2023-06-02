import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-em-andamento',
  templateUrl: './venda-em-andamento.component.html',
  styleUrls: ['./venda-em-andamento.component.scss']
})
export class VendaEmAndamentoComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/transacao-aprovada']);
  }

}
