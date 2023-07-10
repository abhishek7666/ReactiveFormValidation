import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  salutations = ['Miss', 'Mr', 'Mrs', 'Ms'];
  showSuccessMessage = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      salutation: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', Validators.required],
      adharCardNumber: ['', [Validators.required, Validators.pattern('[0-9]{12}')]],
      address: this.formBuilder.group({
        pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
        landmark: [''],
        state: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required]
      })
    });
  }

 

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Perform registration logic or API call
      console.log(this.registrationForm.value);
      
      // Show success message
      this.showSuccessMessage = true;

      // Reset the form after a delay
      setTimeout(() => {
        this.registrationForm.reset();
        this.showSuccessMessage = false;
      }, 3000);
    } else {
      // Show error messages or handle form submission failure
      console.log('Form submission failed. Please check the fields.');
    }
  }
}