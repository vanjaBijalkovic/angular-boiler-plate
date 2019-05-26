import { Component } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "registration-page",
  templateUrl: "./registration-page.component.html"
})
export class RegistrationPageComponent {
  public newUser = {};

  public constructor(private _authService: AuthService) {}

  public onSubmit() {
    this._authService.register(this.newUser);
  }
}
