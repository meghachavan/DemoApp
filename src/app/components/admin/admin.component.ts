import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser: Observable<User[]>;
  constructor(private userSvc: UserService) {    
    this.currentUser = this.userSvc.User();
    console.log(this.currentUser);
  }

  ngOnInit() {

  }

}
