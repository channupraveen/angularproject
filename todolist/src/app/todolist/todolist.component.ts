import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todolist: string [] = [] ;
  inputvalues: string = "";

  remove(name: string ){
    this.todolist = this.todolist.filter(value => value !==name);
  }
   
  addtolist(){
if (this.inputvalues !="") {
  this.todolist.push(this.inputvalues);
  this.inputvalues="";

  
}
else{
  alert("enter a proper value")
}
  }




ngOnInit(): void {
this.todolist = ["task1","task2"];
}

}