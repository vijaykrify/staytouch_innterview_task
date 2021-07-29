import { Component, OnInit } from '@angular/core';
import {  Subject } from 'rxjs';
import {CommonserviceService} from '../../services/commonservice.service';
import { Router } from '@angular/router';
import { Meet } from '../../models/meet';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();

  meets:Meet[]=[];
  constructor(private commonservice: CommonserviceService,
    private route:Router) { }

  ngOnInit(): void {
    //for pagination
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthChange:false,
      
    };
    //to get meet data to dispaly in table
    this.meets=this.commonservice.getMeets();
    }
    //edit meeting
  editMeet=(data)=>{
    this.route.navigate(['/edit/'+data.id])
  }

  //delete 
  deleteMeet=(data)=>{
    //this.meets = [];
    this.meets= this.commonservice.delete(data.id)
    // alert("Meeting Deleted successfully")
    Swal.fire('Thank you...', 'You deleted succesfully!', 'success')  

    this.dtTrigger.next();
  }
    //logout
  logout=()=>{
    localStorage.removeItem("valid");
    localStorage.removeItem("meets");
    this.route.navigate(['']);
  }
}
