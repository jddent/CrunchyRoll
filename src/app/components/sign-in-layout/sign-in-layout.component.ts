import { Component, OnInit } from '@angular/core';
import { CreateAccountService } from './create_account.service';
import { CreateAccountModel } from './create_account_model.component';

@Component({
  selector: 'cr-sign-in-layout',
  templateUrl: './sign-in-layout.component.html',
  styleUrls: ['./sign-in-layout.component.css']
})
export class SignInLayoutComponent implements OnInit {

  constructor(public ai : CreateAccountService) { }

  ngOnInit(): void {
  }

  addAccountInfo(accountinfo : CreateAccountModel){
    console.log("You clicked create account");
    console.log(accountinfo);
    this.ai.addAccountInfo(accountinfo);
    
  }
}
