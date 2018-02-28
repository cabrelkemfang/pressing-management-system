import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
import { Material } from '../../domain/material';

@Component({
  selector: 'app-material-update',
  templateUrl: './material-update.component.html',
  styleUrls: ['./material-update.component.css']
})
export class MaterialUpdateComponent implements OnInit {
  material: any[] = [];
  quantitym;
  totalPrice;
  constructor(private _service: ServicesService, private _router: Router) { }

  ngOnInit() {
    this.material[0] = this._service.material;
    console.log(this.material);
    console.log(this.material[0]);
  }

  registerForm(value) {
    console.log(value);
    console.log(this.material[0].id);

    value["id"] = this.material[0].id;
    console.log(value);

    this._service.updateMaterial(value).subscribe((data: Response) => {
      console.log(data.status);
      this._router.navigate(['receptioninst/cleanningMaterial']);
    }, (error) => {
      console.log(error);
    })
  }

  onKeyup(value) {
    this.quantitym = value;
  }
  onkey(value1) {
    this.totalPrice = this.quantitym * value1;
  }
}
