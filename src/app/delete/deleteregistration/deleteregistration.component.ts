import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deleteregistration',
  templateUrl: './deleteregistration.component.html',
  styleUrls: ['./deleteregistration.component.css']
})
export class DeleteregistrationComponent implements OnInit {
  value:String=this._service.messagerl;
  constructor(private _router: Router,private _service :ServicesService) { }

  ngOnInit() {
  }
  deleteOk(){
    this._router.navigate(["receptioninst/registration"])
  }
}
