import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/Login/auth.service';
import { StorageService } from 'src/app/Service/Login/storage.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor( private storageService: StorageService, private authService: AuthService) { }

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
