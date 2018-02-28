import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ServicesService } from '../services.service';
import { User } from '../domain/user';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-new-receptionist',
  templateUrl: './new-receptionist.component.html',
  styleUrls: ['./new-receptionist.component.css']
})
export class NewReceptionistComponent implements OnInit {

  user: User[];
  displayedColumns = ['position', 'firstName', 'lastName', 'phone', 'matricule','email', 'but1', 'but2'];
 // dataSource:MatTableDataSource<Client>();
  dataSource = new MatTableDataSource<User>();
  

  constructor(private _service: ServicesService, private _router: Router,private _route : ActivatedRoute) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnInit() {

    this._service.getUsers()
      .subscribe((data) => {
        this.user = data;
        this.dataSource = new MatTableDataSource<User>(this.user);
        console.log(this.user);
      },
        (error) => { console.log(error) })
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  update(value) {
    console.log(value);
    //this._service.client.push(value) ;
    this._service.receptionist = value;
    console.log(this._service.receptionist);
    this._router.navigate(['receptioninst/updateR']);
  }

  delete(value) {
    this._service.deleteUser(value.id)
      .subscribe((data) => {
        this.user.splice(this.user.indexOf(value), 1);
        //
      }, ((error) => {
        console.log((error));
      }))
      this._service.messager="The receptionist have been deleted successefully";
    this._router.navigate(["receptioninst/printNr"])
  }

  clientForm(value) {
    console.log(value);
    this._service.createUser(value).subscribe((data) => {
      this.user = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    })
    this._service.messager="The client have been created successefully";
    this._router.navigate(["receptioninst/printNr"])
  }

}
