import { Component, OnInit } from '@angular/core';

import {Verdura} from '../verdura';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class VerdurasComponent implements OnInit {

	verdura:Verdura={
		id:1,
		nombre:'calabaza',
		color:'naranja'
	}


  constructor() { }

  ngOnInit() {
  }

}
