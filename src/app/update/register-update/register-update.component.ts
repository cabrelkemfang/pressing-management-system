import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
import { Registration } from '../../domain/registration';


@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {
  registration: any[] = [];

  constructor(private _service: ServicesService, private _router: Router) { }

  ngOnInit() {
    //client
    this.registration[0] = this._service.registration;
    console.log(this.registration);
    console.log(this.registration[0]);
  }

  registerForm(value) {
    console.log(value);
    console.log(this.registration[0].id);

    value["id"] = this.registration[0].id;
    console.log(value);
    this._service.updateRegistrations(value).subscribe((data: Response) => {
      console.log(data.status);
      this._router.navigate(['receptioninst/registration']);
    }, (error) => {
      console.log(error);
    })
  }


  }
