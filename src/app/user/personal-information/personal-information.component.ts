import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  recept=[
    {firstName:"ghislain",lastName:"cabrel",phone:675463395,location:"buea Ub junction",email:"ghislainck7@gmail.com",username:"ck7",matricule:"FE14A105"}
  ];
  
  constructor() { }

  ngOnInit() {
    
  }
  receptForm(value){
    console.log(value);
  }
}
