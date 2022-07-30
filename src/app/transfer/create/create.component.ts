import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../transfer'
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  transferCreateForm: Transfer = {
    accountHolder: '',
    iban: '',
    amount: '',
    date: '',
    note: '',
    id: ''
  }

  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.transferService.create(this.transferCreateForm).subscribe({
      next:(data) => {
        this.router.navigate(["/transfer/home"])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
