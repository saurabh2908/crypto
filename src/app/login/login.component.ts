import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { PojoService } from '../pojo.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any={
    email:'',
    pass:''
  };
  constructor(private service:AuthService, private router:Router, private pojo:PojoService) { }

  ngOnInit(): void {
  }

  signIn(){
    console.log("data is",this.data)
    this.service.signIn(this.data).subscribe(res=>{
      console.log("i am in",res);
      // this.pojo.setData(this.data);
      this.router.navigate(['chat']);
    },err=>{
      console.log(err);
      alert("wrong cridentials")
    })
  }

}
