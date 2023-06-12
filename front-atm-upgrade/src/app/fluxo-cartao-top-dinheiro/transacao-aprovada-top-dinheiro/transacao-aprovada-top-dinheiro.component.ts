import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacao-aprovada-top-dinheiro',
  templateUrl: './transacao-aprovada-top-dinheiro.component.html',
  styleUrls: ['./transacao-aprovada-top-dinheiro.component.scss']
})
export class TransacaoAprovadaTopDinheiroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
