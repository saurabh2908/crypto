import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PojoService {
  
  store:any;
  constructor() { }
  setData(data){
    this.store=data;
  }
  getData(){
    return this.store;
  }
}
