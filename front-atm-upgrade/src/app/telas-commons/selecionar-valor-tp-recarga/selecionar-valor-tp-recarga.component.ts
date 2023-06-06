import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-valor-tp-recarga',
  templateUrl: './selecionar-valor-tp-recarga.component.html',
  styleUrls: ['./selecionar-valor-tp-recarga.component.scss']
})
export class SelecionarValorTpRecargaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/selecione-tipo-recarga']);
  }

}
