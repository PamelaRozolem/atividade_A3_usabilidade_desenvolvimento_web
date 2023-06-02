import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisitando-qr-code',
  templateUrl: './requisitando-qr-code.component.html',
  styleUrls: ['./requisitando-qr-code.component.scss']
})
export class RequisitandoQrCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/retire-bilhete']);
  }

}
