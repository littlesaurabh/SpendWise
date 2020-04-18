import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-cources',
  templateUrl: './cources.page.html',
  styleUrls: ['./cources.page.css'],
})
export class CourcesPage implements OnInit {

  constructor(private router:ActivatedRoute,private r:Router) { }
getValue
  ngOnInit() {
    
    this.router.queryParams.subscribe((res)=>{
      this.getValue=JSON.parse(res.value)
      console.log(JSON.parse(res.value));
  });
 
  }

  loadContent(cource){
    this.r.navigate(["/contents"],{
      queryParams:{json:cource.json}
      
    })
  }

}
