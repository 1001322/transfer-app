import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transfer } from '../transfer'
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  transferEditForm: Transfer = {
    accountHolder: '',
    iban: '',
    amount: '',
    date: '',
    note: '',
    id: ''
  }

  constructor(private transferService: TransferService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      console.log(id);
      this.getById(id);
    })
  }

  getById(id: string) {
    this.transferService.getById(id).subscribe((data) => {
      console.log(data);
      this.transferEditForm = data[0];
    })
    console.log(this.transferEditForm);
  }

  update() {
    this.transferService.update(this.transferEditForm).subscribe({
      next: (data) => {
        this.router.navigate(["transfer/home"])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
