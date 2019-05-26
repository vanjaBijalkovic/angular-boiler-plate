import { Component } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html"
})
export class LoginPageComponent {
  public user = {};

  public constructor(private _authService: AuthService) {}

  public login() {
    this._authService.login(this.user);
  }
}
