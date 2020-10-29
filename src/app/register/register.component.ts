import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { PojoService } from '../pojo.service'
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
  constructor(private service:AuthService, private router:Router, private pojo:PojoService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.service.signUp(this.data).subscribe(res=>{
      console.log(res);
      this.router.navigate(['login']);
      this.pojo.setData(this.data);
    },err=>{
      console.log(err);
    })
  }
}
