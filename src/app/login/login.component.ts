import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  constructor(private _service: ServicesService, private _router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {

  }


  onSubmit(value) {
    console.log(value.userName);

    this._service.getUser(value.userName).subscribe((data) => {
      this.user = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    })

    if (this.user != null) {
      this._service.user = value.userName;
      console.log(this._service.user);
      if (this.user.password == value.password) {
        if (this.user.role == "receptionist") {
          this._service.roleName = "receptionist";
          this._router.navigate(["/receptioninst"])
        }
        else {
          this._service.role = true;
          this._service.roleName = "administrator";
          this._router.navigate(["/receptioninst"])
        }
      } else {
        this.openSnackBar("The User Name or The password are not Correct");
      }
    } else {
      this.openSnackBar("The User Name or The password are not Correct");
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
