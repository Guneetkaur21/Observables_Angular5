import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserCommunicationService {
  private user = new BehaviorSubject<string>('');
  cast = this.user.asObservable();
  constructor() { }
  
  editUser(newUser){
    this.user.next(newUser);
  }
}


