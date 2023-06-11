import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacao-aprovada',
  templateUrl: './transacao-aprovada.component.html',
  styleUrls: ['./transacao-aprovada.component.scss']
})
export class TransacaoAprovadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // goTo(){
  //   this.router.navigate(['/requisitando-qr-code']);
  // }

}
