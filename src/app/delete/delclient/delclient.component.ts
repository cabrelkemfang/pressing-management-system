import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-delclient',
  templateUrl: './delclient.component.html',
  styleUrls: ['./delclient.component.css']
})
export class DelclientComponent implements OnInit {
value:String=this._service.messagedl;
  constructor(private _router: Router,private _service :ServicesService) { }

  ngOnInit() {
  }

  deleteOk(){
    this._router.navigate(["receptioninst/client"])
  }
}
