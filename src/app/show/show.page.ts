import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  member:any=[];

  constructor(
    private http:DataapiService,
    private dataapi:HttpClient,
    private nav:NavController,
  ) { 
    this.loadData();
  }

  ngOnInit() {
  }

  loadData(){
    this.http.listmember().subscribe({
      next:(res:any)=>{
      console.log("แสดงข้อมูลสำเร็จ");
      this.member=res;
    },
    error:(err:any)=>{
      console.log("แสดงข้อมูลไม่สำเร็จ",err);
    }
  })
}

edit(datamem:any){
  this.http.datadetail = datamem;
  console.log(datamem);
  this.nav.navigateForward('/edit');
}

delMem(id:any){
  this.http.deleteMember(id).subscribe({
    next:(res:any)=>{
      console.log("ลบข้อมูลสำเร็จ");
      this.loadData();
    },
    error:(err:any)=>{
      console.log("ลบข้อมูลไม่สำเร็จ",err);
    }
  });
}

}