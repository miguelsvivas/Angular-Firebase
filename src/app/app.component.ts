import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit{

  config!:any;
  collection = {count: 60, data: [] as any[]}




 ngOnInit(): void {

  


    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
          id:i,
          nombre: "nombre"+i,
          apellido: "apellido"+i
        })
    }


     this.config = {
       itemsPerPage : 10,
       currentPage: 1,
       totalItems: this.collection.count
     }
 }

 pageChanged(event:number){
   this.config.currentPage = event;
 }

 eliminar(item:any):void{
   this.collection.data.pop();
 }


}
