import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {
  value: String;
  role:Boolean;
  user:String;
  constructor(private _service: ServicesService, private _router: Router) { }

  ngOnInit() {
    this.value = this._service.roleName;
    this.role=this._service.role;
    this.user=this._service.user;
  }

  logout() {
    this._service.role=false;
    this._service.roleName="receptionist"
    this._router.navigate(["login"])
  }

}
