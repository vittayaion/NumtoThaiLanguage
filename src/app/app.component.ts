import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-translate';
  number: any;
  n: any;
  tmp: any;

  digits = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ"];
  units = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
  result = "";

  onKeyup(event: any) {
    this.number = event.target.value;
    this.result = "";
    if (this.number > 1000000) {
      this.result = 'ห้ามเกิน : หนึ่งล้าน';
    }
    else if (this.number < 0) {
      this.result = 'ห้ามน้อยกว่า : 0';
    }
    else if (isNaN(this.number)) {
      this.result = 'ข้อมูลนำเข้าไม่ถูกต้อง';
    }
    else {
      for (let i = 0; i < this.number.length; i++) {
        this.tmp = this.number.substring(i, i + 1);  // วนค่าตัวแรกสุด
        if (this.tmp == '.') {
          this.result = 'ข้อมูลนำเข้าไม่ถูกต้อง';
          this.number = ""
        }
        else if (this.tmp != 0) {
          // วนค่าตัวสุดท้ายถ้า = 1
          if ((i == (this.number.length - 1)) && (this.tmp == 1)) {
            if (this.result == "") {
              this.result = this.digits[this.tmp];
            }
            else {
              this.result += "เอ็ด"
            }
          }
          //หลักที่สอง เป็นเลข2
          else if ((i == (this.number.length - 2)) && (this.tmp == 2)) {
            this.result += "ยี่"
          }
          //หลักที่สอง เป็นเลข1 
          else if ((i == (this.number.length - 2)) && (this.tmp == 1)) {
            this.result += ""
          }
          //เอาtextเลขมาใส่
          else {
            this.result += this.digits[this.tmp];
          }
          //วนเอาค่าหลักมาใส่
          this.result += this.units[this.number.length - i - 1];

        }
        //เก็บเคสเลข 0
        else {
          if (this.result == "") {
            this.result = this.digits[this.tmp];
            this.number = "";
            // this.result = "ห้ามกรอกเลข 0";
          }
        }
      }
    }
  }




}
