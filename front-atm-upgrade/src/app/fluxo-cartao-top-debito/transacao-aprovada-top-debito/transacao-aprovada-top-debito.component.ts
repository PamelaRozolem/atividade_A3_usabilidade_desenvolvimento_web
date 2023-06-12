import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacao-aprovada-top-debito',
  templateUrl: './transacao-aprovada-top-debito.component.html',
  styleUrls: ['./transacao-aprovada-top-debito.component.scss']
})
export class TransacaoAprovadaTopDebitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // goTo(){
  //   this.router.navigate(['/requisitando-qr-code']);
  // }

}
