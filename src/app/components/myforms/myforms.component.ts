import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'myforms',
    templateUrl: 'myforms.component.html',
    styleUrls: ['../../app.component.css']
})
export class MyformsComponent {

    users:  users;
    persons: users[];
    hobbies: string[];
    model: any = {};

    constructor(){
        

    this.persons=
    
    [
       { 
        firstname: 'Jhon',
        lastname: 'Doe',
        username: 'jhon'
           }   
               
     
  
    ] ;

        
    }

addUser(firstname,lastname,username){
    this.users ={
        firstname: firstname,
        lastname: lastname,
        username: username
    }
     console.log(this.users)
     this.persons.push(this.users);


    
 
   

}


}



interface users{

    firstname: string;
    lastname: string;
    username: string;
}
