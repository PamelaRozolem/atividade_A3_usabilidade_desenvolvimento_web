import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insira-cartao-bilhete',
  templateUrl: './insira-cartao-bilhete.component.html',
  styleUrls: ['./insira-cartao-bilhete.component.scss']
})
export class InsiraCartaoBilheteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
