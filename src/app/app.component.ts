import { Component } from '@angular/core';
import { AuthService } from './Service/Login/auth.service';
import { StorageService } from './Service/Login/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend01';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.storageService.getToken();
    if (this.isLoggedIn) {
      this.isLoggedIn = true;
      //const user = this.storageService.getUser();
      //this.username = user.username;
    }
  }


  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}
