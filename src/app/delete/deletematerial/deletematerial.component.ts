import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-deletematerial',
  templateUrl: './deletematerial.component.html',
  styleUrls: ['./deletematerial.component.css']
})
export class DeletematerialComponent implements OnInit {
  value:String=this._service.messageml;
  constructor(private _router: Router,private _service :ServicesService) { }

  ngOnInit() {
  }
  deleteOk(){
    this._router.navigate(["receptioninst/cleanningMaterial"])
  }

}
