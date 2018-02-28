import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ServicesService } from '../../services.service';
import { Material } from '../../domain/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cleanning-material',
  templateUrl: './cleanning-material.component.html',
  styleUrls: ['./cleanning-material.component.css']
})
export class CleanningMaterialComponent implements OnInit {

  material: Material[];
  quantitym;
  displayedColumns = ['position', 'material', 'quantity', 'unitprice', 'totalprice', 'but1', 'but2'];
  dataSource = new MatTableDataSource<Material>();
  totalPrice;

  constructor(private _service: ServicesService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._service.getMaterials()
      .subscribe((data) => {
        this.material = data;
        this.dataSource = new MatTableDataSource<Material>(this.material);
        console.log(this.material);
      },
        (error) => { console.log(error) })
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  update(value) {
    console.log(value);
    //this._service.client.push(value) ;
    this._service.material = value;
    console.log(this._service.material);
    this._router.navigate(['receptioninst/updateM']);
  }


  delete(value) {
    this._service.deleteMaterial(value.id)
      .subscribe((data) => {
        this.material.splice(this.material.indexOf(value), 1);
        //
      }, ((error) => {
        console.log((error));
      }))
    this._service.messageml = "The material have been deleted successefully";
    this._router.navigate(["receptioninst/printM"])
  }

  materialForm(value) {
    console.log(value);
    this._service.createMaterial(value).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    })
    this._service.messageml = "The material have been created successefully";
    this._router.navigate(["receptioninst/printM"])
  }

  onKeyup(value1:any) {
    this.quantitym = value1;
  }

  onKey(value) {
    let x = value;
    let y = this.quantitym;
    this.totalPrice = x * y;

  }


}

