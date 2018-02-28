import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-receptionist',
  templateUrl: './delete-receptionist.component.html',
  styleUrls: ['./delete-receptionist.component.css']
})
export class DeleteReceptionistComponent implements OnInit {
  value:String=this._service.messager;
  constructor(private _router: Router,private _service :ServicesService) { }
  
  ngOnInit() {
  }
  deleteOk(){
    this._router.navigate(["receptioninst/newReceptionist"])
  }

}
