import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cred = {
    userName: '',
    password: ''
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  initiateLogin = () => {
    console.log('Initiating Login...');
    this.router.navigate(['/dashboard']);
    return false;
  }

  ngOnInit() {
  }

}
