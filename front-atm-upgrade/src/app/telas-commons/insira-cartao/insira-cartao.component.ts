import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insira-cartao',
  templateUrl: './insira-cartao.component.html',
  styleUrls: ['./insira-cartao.component.scss']
})
export class InsiraCartaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
