import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  roleOfEmp : string;
  
   public listEmp : any = [

     {name :'Gaurav', role:'Admin'},
     {name :'Rahul', role:'Admin'},
     {name :'Raj', role:'Member'},
     {name :'Sam', role:'Superviser'},
     {name :'Derek', role:'Member'},
     {name :'David', role:'SuperAdmin'},
     {name :'Heisenberg', role:'Admin'},
     {name :'Leo', role:'Member'},
     {name :'Daniel', role:'Admin'},
     {name :'Tedd', role:'SuperAdmin'},
     {name :'Joey', role:'Member'},
     {name :'Chandler', role:'Superviser'},
   ]


}
