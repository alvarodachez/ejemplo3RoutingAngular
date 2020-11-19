import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/interfaces/owner';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  owner: Owner;

  constructor() {
    this.owner = {
      firstName: 'pepe',
      lastName: 'de los palotes',
      address: 'Calle hola que tal',
      city: 'Adios paradise',
      telephone: '84930284'
    };
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.table(this.owner);
  }
}
