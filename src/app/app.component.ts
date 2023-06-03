import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changePhone(){
    if(this.object.phone==="88888888")
    {this.object.phone="12345678"}else{
      this.object.phone="88888888"
    }
  }
  title = 'My angular-app';
  object={id:1,name:"Mario",phone:"12345678"}
}
