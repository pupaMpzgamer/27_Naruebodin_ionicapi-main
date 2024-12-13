import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  txtstu:any;
  txtname:any;
  txtnname:any;
  txtage:any;
  txtaddress:any;
  txtphone:any;
  txtstatus:any;

  //ประกาศตัวแปรสำหรับส่งข้อมูลไปยัง API
  id_stu:any;
  name:any;
  nname:any;
  age:any;
  address:any;
  phone:any;
  status:any;


  constructor(public dataapi: DataapiService, public router:Router) {}

  addmember(){
    let data={
      id_stu:this.txtstu,
      name:this.txtname,
      nname:this.txtnname,
      age:this.txtage,
      phone:this.txtphone,
      address:this.txtaddress,
      status:this.txtstatus
    }
    this.dataapi.addData(data).subscribe({next:(res:any)=>{
      console.log("ข้อมูลถูกเพิ่ม",res);
    },
    error:(error:any)=>{
      console.log("ข้อมูลไม่ถูกเพิ่ม",error);
    }
  });
    this.clearform();
  }

  clearform(){
    this.txtstu="";
    this.txtname="";
    this.txtnname="";
    this.txtage="";
    this.txtphone="";
    this.txtaddress="";
    this.txtstatus="";
  }

  showdata(){
    this.router.navigate(['/show']);
  }

}