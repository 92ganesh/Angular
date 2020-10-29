import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  display:string= "0";
  clear:boolean=true;

  buttonPressed($event){
    if($event.target.value==="="){
      this.display = eval(this.display);
      this.clear=true;
    }else{
      if(this.clear){
        this.display=""; 
        this.clear=false;
      }
      this.display+=$event.target.value;
    }
  }


}
