import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Transfer } from '../transfer';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTransfers: Transfer[] = [];
  constructor(private transferService: TransferService) { }

  deleteModal: any;
  deleteId: string = '';

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.get();
  }

  get() {
    this.transferService.get().subscribe((data) => {
      this.allTransfers = data;
    })
  }

  openDeleteModal (id: string) {
    this.deleteId = id;
    this.deleteModal.show();
  }

  delete() {
    this.transferService.delete(this.deleteId).subscribe((data) => {
      this.allTransfers = this.allTransfers.filter(_ => _.id !== this.deleteId);
      this.deleteModal.hide();
    })
  }

}
