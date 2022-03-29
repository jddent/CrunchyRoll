import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CreateAccountModel } from "./create_account_model.component";

@Injectable({
    providedIn: 'root'
})

export class CreateAccountService{
   
    constructor(private db:AngularFireDatabase) {

    }

    public getAccountInfo() {
        return this.db.list<CreateAccountModel>("accountinfo").valueChanges();
    }

    addAccountInfo(accountinfo : CreateAccountModel){
        this.db.list<CreateAccountModel>("accountinfo").push(accountinfo);
    }
}