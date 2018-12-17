import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { map, tap } from 'rxjs/operators';
import {environment} from '../environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-project';

  ngOnInit() {
   console.log(environment.url);
  }

  constructor(private http:HttpClient){};
 

  callMicroservice() {
    console.log("chiamato!");
    var prova = '';
    var prova2 =  this.http.get(environment.url).pipe(
      map((response: any) => response),
      ).subscribe(element => console.log(element));
  }


  
}
