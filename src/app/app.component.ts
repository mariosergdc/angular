import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //patron de inyeccion de dependencias asegura que haya una sola instancia de http
  http = inject(HttpClient);
  products: Product[]=[];
 title = 'My angular-app';
  object={id:1,name:"Mario",phone:"12345678"}

  changePhone(){
    if(this.object.phone==="88888888")
    {this.object.phone="12345678"}else{
      this.object.phone="88888888"
    }
  }
  ngOnInit(){
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products")
    .subscribe((data)=>{
      this.products=data;
      console.log(data);
    })
    /* this.http.get("https://api.escuelajs.co/api/v1/products")
    .subscribe((data:any)=>{
      console.log(data);
    }) */
  }
 
}
