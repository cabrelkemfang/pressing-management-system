import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ServicesService } from '../../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Registration } from '../../domain/registration';
import { Client } from '../../domain/client';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class RegistrationComponent implements OnInit {

  registration: Registration[] = [];
  client: Client[];
  totalp;
  balance;
  amountp;

  displayedColumns = ['position', 'clients', 'iterms', 'depositdate', 'duedate', 'satus', 'amount', 'avance', 'balance', 'but2'];
  dataSource = new MatTableDataSource<Registration>();
  constructor(private _service: ServicesService, private _router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

    //client
    this._service.getClients()
      .subscribe((data) => {
        this.client = data;
        console.log(this.client);
      },
        (error) => { console.log(error) })



    //registration 
    this._service.getRegistrations()
      .subscribe((data) => {
        this.registration = data;
        this.dataSource = new MatTableDataSource<Registration>(this.registration);
        console.log(this.registration);
      },
        (error) => { console.log(error) })

  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  registerForm(value) {
    console.log(value);
    this._service.createRegistrations(value).subscribe((data) => {
      this.registration = data;
      console.log(this.registration);
    }, (error) => {
      console.log(error);
    })
    this._service.messagerl = "The client have been successefully Register";
    this._router.navigate(["receptioninst/printR"])

  }

  update(value) {
    console.log(value);
    //this._service.client.push(value) ;
    this._service.registration = value;
    console.log(this._service.registration);
    this._router.navigate(['receptioninst/updateR']);
  }

  delete(value) {
    this._service.deleteRegistrations(value.id)
      .subscribe((data) => {
        this.registration.splice(this.registration.indexOf(value), 1);
        //
      }, ((error) => {
        console.log((error));
      }))
    this._service.messagerl = "The client have been deleted successefully";
    this._router.navigate(["receptioninst/print"])
  }
  getColor(status) {
    switch (status) {
      case 'pending':
        return 'green';
      case 'cleanning':
        return 'blue';
      case 'ready':
        return 'red';
    }
  }

  onKey(value){
    this.totalp=value;
  }

  onKey1(value1){
this.balance=this.totalp-value1;
  }

}


