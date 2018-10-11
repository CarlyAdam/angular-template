import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'myapi',
    templateUrl: 'myapi.component.html',
    styleUrls: ['../../app.component.css']
})
export class MyapiComponent {
    private apiUrl='https://api.myjson.com/bins/fqo98';
    data:any={};

constructor(private http:Http){
   
    
    this.getData();
    this.getBooks();

  }

   getData(){
    return this.http.get(this.apiUrl)
    .map((res:Response)=>res.json())
  }

  getBooks(){

    this.getData().subscribe(data=>{

console.log(data);
this.data=data;

    })

  }
}
