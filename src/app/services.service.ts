import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Client } from './domain/client';
import { HttpHeaders } from '@angular/common/http';
import { Material } from './domain/material';
import { User } from './domain/user';

@Injectable()
export class ServicesService {
  messagedl:String;
  messagerl:String;
  messageml:String;
  messager:String;
  
  client: Object ;
  registration: Object ;
  material :Object;
  receptionist:Object;
  role:Boolean=false;
  roleName:String;
  user:String;

  //={id: 1, firstName: "ghislain", lastName: "cabrel", phone: 675463395, location: "buea ub justion"};
  private baseUrl: String = "http://localhost:8080/v1/api";



  cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.cpHeaders });


  constructor(private _http: Http) { }
  // client
  getClients() {
    return this._http.get(this.baseUrl + '/clients',this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getClient(id: Number) {
    return this._http.get(this.baseUrl + '/client/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteClient(id: Number) {
    return this._http.delete(this.baseUrl + '/client/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createClient(client: Client) {
    return this._http.post(this.baseUrl + '/client/', JSON.stringify(client), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateClient(client: Client) {
    return this._http.put(this.baseUrl + '/client', JSON.stringify(client), this.options)
      .catch(this.errorHandler);
  }



  //resistration
  getRegistrations() {
    return this._http.get(this.baseUrl + '/registrations',this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getRegistration(id: Number) {
    return this._http.get(this.baseUrl + '/registration/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteRegistrations(id: Number) {
    return this._http.delete(this.baseUrl + '/registration/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createRegistrations(client: Client) {
    return this._http.post(this.baseUrl + '/registration/', JSON.stringify(client), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateRegistrations(client: Client) {
    return this._http.put(this.baseUrl + '/registration', JSON.stringify(client), this.options)
      .catch(this.errorHandler);
  }


  //materials
  getMaterials() {
    return this._http.get(this.baseUrl + '/materials',this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getMaterial(id: Number) {
    return this._http.get(this.baseUrl + '/material/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteMaterial(id: Number) {
    return this._http.delete(this.baseUrl + '/material/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createMaterial(material: Material) {
    return this._http.post(this.baseUrl + '/material/', JSON.stringify(material), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateMaterial(material: Material) {
    return this._http.put(this.baseUrl + '/material', JSON.stringify(material), this.options)
      .catch(this.errorHandler);
  }


//user
getUsers() {
  return this._http.get(this.baseUrl + '/users',this.options)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
}

getUser(userName: String) {
  return this._http.get(this.baseUrl + '/user/' + userName, this.options)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
}

deleteUser(id: Number) {
  return this._http.delete(this.baseUrl + '/user/' + id)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
}

createUser(user: User) {
  return this._http.post(this.baseUrl + '/user/', JSON.stringify(user), this.options)
    .map((response: Response) => response.json())
    .catch(this.errorHandler);
}

updateUser(user: User) {
  return this._http.put(this.baseUrl + '/user', JSON.stringify(user), this.options)
    .catch(this.errorHandler);
}

  errorHandler(error: Response) {
    return Observable.throw(error || "server error");
  }


}
