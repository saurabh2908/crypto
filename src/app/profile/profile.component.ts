import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public qrdata: string = null;
  name:any;
  email:any;
  constructor() { }

  ngOnInit(): void {
    this.qrdata = 'Harbole ki maa ki chut';
  }

}
