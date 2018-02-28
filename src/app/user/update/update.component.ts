import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Client } from '../../domain/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  client: any[] = [];
  status;
  constructor(private _service: ServicesService, private _router: Router) { }

  ngOnInit() {

    //client
    this.client[0] = this._service.client;
    console.log(this.client);
    console.log(this.client[0]);

  }

  clientForm(value) {
    console.log(value);
    console.log(this.client[0].id);
    value["id"] = this.client[0].id;
    console.log(value);
    this._service.updateClient(value).subscribe((data: Response) => {
      this.status = data
      console.log(data.status);
      if (data.status == 200) {
        console.log(this.status);
        this._router.navigate(['receptioninst/client']);
      }
    }, (error) => {
      console.log(error);
    })

    // if (1) {
    //   console.log(this.status);
    //   this._router.navigate(['/client']);
    // }
  }

}
