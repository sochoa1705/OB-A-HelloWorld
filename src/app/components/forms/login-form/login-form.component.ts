import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in','cityslicka')
    .subscribe(
        (response: any) => {
          console.log(response);
          sessionStorage.setItem('token',response.token);

        },error => console.error(error),
        () => console.log('Request completed')
        
      );
  }



}
