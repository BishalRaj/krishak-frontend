import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authShow = true;

  changeValue() {
    if (this.authShow) {
      this.authShow = false;
      alert(this.authShow);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
