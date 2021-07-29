import { Component, OnInit } from '@angular/core';
import {CommonserviceService} from '../../services/commonservice.service';
import { Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { Meet } from '../../models/meet';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-editmeet',
  templateUrl: './edit_meetlist.component.html',
  styleUrls: ['./edit_meetlist.component.scss']
})
export class EditmeetComponent implements OnInit {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  meets:Meet[]=[];
  id:any;
  meet:any;
  editForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private commonservice: CommonserviceService,
    private route:Router,
    private active:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.id=this.active.snapshot.params.id;
    // to get data to Edit
    this.meets=this.commonservice.getMeets();
    console.log(this.meets);
    this.meet=this.meets.find(p => p.id==this.id);
    console.log(this.meet)
    
    //form validation after edit
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      meettime: ['', Validators.required],
      address:[''],
  });

  //patch the value to for for editing
  this.editForm.patchValue({
    firstName:this.meet.firstName,
    lastName:this.meet.lastName,
    email:this.meet.email,
    phone:this.meet.phone,
    meettime:this.meet.meettime,
    address:this.meet.address,
  })
  }
  get f() { return this.editForm.controls; }

  //form onsubmit
  onSubmit=()=> {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
     this.loading = true;
    //To edit the data using localstorgae
    let res=this.commonservice.editMeet(this.meet,this.editForm.value);
    // console.log(res);
    // alert("Meeting Edited successfully");
    Swal.fire('Thank you...', 'You edited the meeting succesfully!', 'success')  

    if(res==1){
    this.route.navigate(['dashboard']);
    }
}
}
