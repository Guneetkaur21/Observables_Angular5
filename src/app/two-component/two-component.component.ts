import { Component, OnInit } from '@angular/core';
import { UserCommunicationService } from 'src/app/user-communication.service';
@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css']
})
export class TwoComponentComponent implements OnInit {
  user: String;

  constructor(private userService : UserCommunicationService) { }

  ngOnInit() {
    this.userService.cast.subscribe(user=> this.user = user);
   // this.userService.cast.subscribe()
  }
  
 

}



