import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code-debito',
  templateUrl: './qr-code-debito.component.html',
  styleUrls: ['./qr-code-debito.component.scss'],


})
export class QrCodeDebitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/selecionar-unidade']);
  }

}


