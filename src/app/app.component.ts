import { Component } from '@angular/core';
import { ConfirmationService } from '../../node_modules/primeng/api';
import {InputMaskModule} from 'primeng/inputmask';
const system={
name:'',age:'',dob:'',gender:'',email:'',phone:''
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng form';
  value:Date;
  ccRegex: RegExp = /[0-9]{10}}$/;
  sys=system; 
  constructor(private confirmationService: ConfirmationService) {}

  confirm() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to Submit?',
          accept: () => {
              //Actual logic to perform a confirmation
            console.log(this.sys)
          }
      });
  }
}
