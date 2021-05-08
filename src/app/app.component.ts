import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from "@angular/common/http";
import {Papa} from 'ngx-papaparse'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private papa : Papa,private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('assets/data/state_wise.csv', {responseType: 'text'})
    .subscribe(data =>{
      this.papa.parse(data,{
        header:true,
        dynamicTyping: true,
        complete: result =>{
          console.log(result.data)
          console.log(Object.keys(result.data[0]))
        }
      })
    })
  }

}
