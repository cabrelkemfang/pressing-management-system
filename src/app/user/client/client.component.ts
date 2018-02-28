import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ServicesService } from '../../services.service';
import { Client } from '../../domain/client';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  isTrue: Object;
  client: Client[];
  displayedColumns = ['position', 'firstName', 'lastName', 'phone', 'location', 'but1', 'but2'];
 // dataSource:MatTableDataSource<Client>();
  dataSource = new MatTableDataSource<Client>();
  

  constructor(private _service: ServicesService, private _router: Router,private _route : ActivatedRoute) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnInit() {

    this._service.getClients()
      .subscribe((data) => {
        this.client = data;

        this.dataSource = new MatTableDataSource<Client>(this.client);
        console.log(this.client);
      },
        (error) => { console.log(error) })
  }


  //data2: Client[] = [];//[{"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":3,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":4,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":5,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":6,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":7,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":8,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":9,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":10,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"},{"id":11,"firstName":"ghislain","lastName":"cabrel","phone":675463395,"location":"buea ub justion"}];

  //dataSource ;//= new MatTableDataSource<Client>(this.data2);



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  update(value) {
    console.log(value);
    this._service.client = value;
    console.log(this._service.client);
    this._router.navigate(['receptioninst/update']);
  }

  delete(value) {
    this._service.deleteClient(value.id)
      .subscribe((data) => {
        this.client.splice(this.client.indexOf(value), 1);
        //
      }, ((error) => {
        console.log((error));
      }))
      this._service.messagedl="The client have been deleted successefully";
    this._router.navigate(["receptioninst/print"])
  }

  clientForm(value) {
    console.log(value);
    this._service.createClient(value).subscribe((data) => {
      this.isTrue = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    })
    this._service.messagedl="The client have been created successefully";
    this._router.navigate(["receptioninst/print"])
  }
}
