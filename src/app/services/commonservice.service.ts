import { Injectable } from '@angular/core';
import { Meet } from '../models/meet';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
meets:Meet[]=[];
  constructor() { }

//get meetings
  getMeets=()=> {
    if(localStorage.getItem('meets') === null) {
      this.meets = [];
    } else {
      this.meets = JSON.parse(localStorage.getItem('meets'));
    }
    return this.meets;
  }
//add meetings
  addMeet=(meet: Meet)=> {
    // console.log(meet);
    meet.id= this.meets.length + 1;
    meet.phone = meet.phone.e164Number;
    this.meets.push(meet);
    console.log(this.meets);
    let meets = [];
    if(localStorage.getItem('meets') === null) {
      meets = [];
      meets.push(meet);
      localStorage.setItem('meets', JSON.stringify(meets));
    } else {
      meets = JSON.parse(localStorage.getItem('meets'));
      meets.push(meet); 
      localStorage.setItem('meets', JSON.stringify(meets));
    }
  }
//Edit meetings
  editMeet=(edit,meet:Meet)=>{
    let meets = JSON.parse(localStorage.getItem('meets'));
    for(let i = 0; i <meets.length; i++) {
      if(meets[i].id == edit.id) {
        meet.id=edit.id;
        meet.phone = meet.phone.e164Number;
        meets[i] = meet;
      }
      localStorage.setItem('meets', JSON.stringify(meets));
   }
   return 1;
  }
  //delete meetings
  delete=(id)=>{
    let meets = JSON.parse(localStorage.getItem('meets'));
     for(let i = 0; i <meets.length; i++) {
      if(meets[i].id == id) {
        meets.splice(i, 1);
      }
     }
      localStorage.setItem('meets', JSON.stringify(meets));
      return meets;
  }

}
