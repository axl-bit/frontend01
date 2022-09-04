import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/Login/auth.service';
import { StorageService } from 'src/app/Service/Login/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
/*
  onSubmit() {

    const { username, password } = this.form;

    return this.authService.login(username, password).subscribe(data => {
      this.storageService.saveToken(data.token);
      this.storageService.saveUser(data);
      this.isLoggedIn = true;
      this.reloadPage();
    }, error => {
      this.isLoggedIn = false;
      this.isLoginFailed = true;
    });
  }
*/
  reloadPage(): void {
    window.location.reload();
  }

}
