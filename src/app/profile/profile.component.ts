import { Component, OnInit } from '@angular/core';
import { PojoService } from '../pojo.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public qrdata: string = null;
  name:any;
  email:any;
  constructor(private service:PojoService) { }

  ngOnInit(): void {
    this.qrdata = 'saurabh sinigh';
    let data = this.service.getData();
    this.name="saurabh singh";
    this.email=data.email;
  }

}
