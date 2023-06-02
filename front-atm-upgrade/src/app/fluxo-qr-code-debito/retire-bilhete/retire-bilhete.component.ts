import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retire-bilhete',
  templateUrl: './retire-bilhete.component.html',
  styleUrls: ['./retire-bilhete.component.scss']
})
export class RetireBilheteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/agradecimento']);
  }

}
