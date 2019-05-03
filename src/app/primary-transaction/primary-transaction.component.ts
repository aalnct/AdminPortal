import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {

  username : string;
  primaryTransactionList : Object[];

  constructor(private route : ActivatedRoute, private userService : UserService) {
    this.route.params.forEach((params : Params) => {
      this.username = params['username'];
    });
    this.getPrimaryTransactionsList();
  }

  getPrimaryTransactionsList(){
      this.userService.getPrimaryTransactionList(this.username).subscribe(
        res => {
          console.log(JSON.parse(JSON.stringify(res))._body);
          this.primaryTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body)
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

}
