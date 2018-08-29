import { Component, OnInit } from '@angular/core';
import { UserCommunicationService } from 'src/app/user-communication.service';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  user:string;
  UserName:string;
  constructor(private userService : UserCommunicationService) {  }

  ngOnInit() {
    this.userService.cast.subscribe(user=> this.user = user);
  }

  editTheUserComponentFunction(){
    this.userService.editUser(this.UserName);
  }

}
