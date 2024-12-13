import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  //ประกาศตัวแปรแบบอาเรย์เพื่อรับค่าข้อมูล
  data_detailMen: any=[];

  constructor(
    public http:HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  datadetail: any=[];

  // ฟังก์ชั่นการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data:any){
    return this.http.post('http://localhost/api1/insert.php',data);
  }

  //สร้างขึ้นมาเพื่อดึงข้อมูลจากapi
  listmember(){
    return this.http.get('http://localhost/api1/listmember.php');
  }

  //ฟังก์ชั่นสำหรับแก้ไขข้อมูล
  editmember(dataEdit:any){
    return this.http.put('http://localhost/api1/update.php',dataEdit);
  }

  //ฟังก์ชั่นลบข้อมูล
  deleteMember(id:any){
    return this.http.delete('http://localhost/api1/delete.php?id='+id);
  }
}