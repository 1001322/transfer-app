import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http:HttpClient) { }

  get() {
    return this.http.get<Transfer[]>("http://localhost:3000/transfer");
  }

  create(payload: Transfer) {
    return this.http.post<Transfer>("http://localhost:3000/transfer", payload);
  }

  getById(id: string) {
    return this.http.get<Transfer[]>(`http://localhost:3000/transfer/${id}`);
  }

  update(payload: Transfer) {
    return this.http.put(`http://localhost:3000/transfer/${payload.id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<Transfer[]>(`http://localhost:3000/transfer/${id}`);
  }
}
