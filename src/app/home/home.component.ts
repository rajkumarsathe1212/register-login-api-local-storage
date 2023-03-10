import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  users:any;

  constructor(private router:Router,private api:ApiService){ }

  ngOnInit(): void {
    this.api.get("https://fakestoreapi.com/products").subscribe((result:any)=>{
      this.users = result;
    })
  }


}

