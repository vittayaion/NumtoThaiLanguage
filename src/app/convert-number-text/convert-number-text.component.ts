import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-number-text',
  templateUrl: './convert-number-text.component.html',
  styleUrls: ['./convert-number-text.component.css']
})
export class ConvertNumberTextComponent implements OnInit {
  result = '';
  textNumber = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
  digitNumber = ['', 'สิบ', 'ร้อย', 'พัน']
  inputNumber: any;
  constructor() { }

  ngOnInit() {

  }

  convertNumber() {
    let lengthNumber = this.inputNumber.length;
    let inputNum = this.inputNumber;
    console.log(this.inputNumber);
    console.log(this.inputNumber.length);

    for (let i = 0; i < lengthNumber; i++) {
      let index = inputNum.slice(i, i + 1) -0;
      console.log(index);
      if (index) {
        if ((i === (lengthNumber - 1)) && (index === 1)) {
          this.result += "เอ็ด"
        } else if ((i === (lengthNumber - 2)) && (index === 2)) {
          this.result += "ยี่"
        } else if((i === (lengthNumber - 2)) && (index === 1)) {
          this.result += ''
        } else {
          this.result += this.textNumber[index];
        }
        this.result += this.digitNumber[lengthNumber - i - 1];
      }
    }
  }

}
