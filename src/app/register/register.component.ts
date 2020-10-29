import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data:any={
    name:'',
    email:'',
    pass:''
  };
  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.service.signUp(this.data).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
}
