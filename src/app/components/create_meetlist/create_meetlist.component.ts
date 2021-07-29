
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {CommonserviceService} from '../../services/commonservice.service'
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-createmeet',
  templateUrl: './create_meetlist.component.html',
  styleUrls: ['./create_meetlist.component.scss']
})
export class CreatemeetComponent implements OnInit {
    createForm: FormGroup;
    loading = false;
    submitted = false;
    separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private commonservice: CommonserviceService
    ) { 
    }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            meettime: ['', Validators.required],
            address:[''],
        });
        
    }
     // convenience getter for easy access to form fields
    get f() { return this.createForm.controls; }

    onSubmit=()=> {
        this.submitted = true;
        if (this.createForm.invalid) {
            return;
        }

        this.loading = true;
        this.commonservice.addMeet(this.createForm.value)
        // alert("Meeting added successfully")
        Swal.fire('Thank you...', 'You created the meeting succesfully!', 'success')  
        this.router.navigate(['/dashboard'])
         }
}
