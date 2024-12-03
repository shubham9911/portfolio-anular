import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ContactService } from "../services/contact.service";
import { ToastComponent } from "../toast/toast.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  loader: boolean = false;
  private _snackBar = inject(MatSnackBar);
  contactForm: FormGroup;
  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      website: [""],
      message: ["", Validators.required],
    });
  }

  sendQueryByEmail() {
    this.loader = true;
    this.contactService
      .sendContactForm(this.contactForm.value)
      .subscribe((res) => {
        if (res.success) {
          this._snackBar.openFromComponent(ToastComponent, {
            duration: 5 * 1000,
            data: { message: res.data, status: "success" },
          });
          this.contactForm.reset();
          this.loader = false;
        } else {
          this._snackBar.openFromComponent(ToastComponent, {
            duration: 5 * 1000,
            data: { message: res.data, status: "error" },
            panelClass: ["custom-toast"],
          });
          this.contactForm.reset();
          this.loader = false;
        }
      });
  }
}
