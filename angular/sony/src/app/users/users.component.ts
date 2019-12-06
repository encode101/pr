import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [{
    id: 1,
    name: 'Rahul Mishra'

  }, {
    id: 2,
    name: 'Raghav Mishra'

  }, {
    id: 3,
    name: 'PK Mishra'

  }];

  constructor(private router: Router) { }

  usersList = () => {
    return this.users;
  }
  ngOnInit() {
  }

}
