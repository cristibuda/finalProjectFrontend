import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  constructor() {
  }

  setUser(user: any): void {
    this.user = user;
  }

  isUserLoggedIn(): boolean {
    console.log("user service")
    console.log(this.user)
    return this.user != null;
  }
}
