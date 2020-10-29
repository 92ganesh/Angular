import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  employees:any= [{empId: "", empName: "", empEmail: ""}];

  constructor(private http:HttpClient){
   
  }

  showAll(){
    console.log("showAll");
    this.http.get('http://localhost:8080/read').subscribe(data=>{
      console.log(data);
      this.employees =data;
    });
  }

  addEmployee(form:NgForm){
    console.log(form.value);
    this.http.post('http://localhost:8080/add',form.value).subscribe(data=>{
      console.log(data);
      this.employees =data;
    });
  }

  deleteEmployee(form:NgForm){
    console.log(form);
    this.http.post('http://localhost:8080/delete',form.value).subscribe(data=>{
      console.log(data);
      this.employees =data;
    });
  }

}
